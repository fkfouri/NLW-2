import express, { Router, response } from 'express'
import db from './database/connection';
import convertHoutToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'hello world'})
})

interface ScheduleItem{
    week_day: number
    from: string
    to: string
}

//transformou em assincrono
routes.post('/classes', async (request, response) =>{
    //desestruturacao do json
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body

    const trx = await db.transaction()

    //criando o usuario
    const insertedUserIds = await trx('users').insert(                    //db demora um pouco, entao uso conceito de promisse
        //usando short sintaxe
        {name, avatar, whatsapp, bio }
        // poderia ser assim: { name: name, avatar: avatar, etc}
        )

    const user_id = insertedUserIds[0];

    //criando a classe
    const insertedClassesIds = await trx('classes').insert({
        subject, cost, user_id
    })

    const class_id = insertedClassesIds[0]

    //vou percorrer cada item do array
    const classSchedule_genericType = schedule.map((scheduleItem : any) => { })
    const classSchedule_usingInterface = schedule.map((scheduleItem : ScheduleItem) => { 
        return{
            class_id,
            week_day: scheduleItem.week_day,
            from: convertHoutToMinutes(scheduleItem.from),
            to: convertHoutToMinutes(scheduleItem.to)
        }
    })

    await trx('class_schedule').insert(classSchedule_usingInterface);

    //commit a transaction
    await trx.commit()

    return response.send()
})

export default routes