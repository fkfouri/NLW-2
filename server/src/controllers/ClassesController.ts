import { Request, Response } from 'express'                         //importar o tipo/interface do express
import db from '../database/connection';
import convertHoutToMinutes from '../utils/convertHourToMinutes';


interface ScheduleItem{
    week_day: number
    from: string
    to: string
}

export default class ClassesController{
    //um retorno de lista no padrao MVC costuma se chamar index
    async index (request: Request, response : Response){
        const filters = request.query;

        if (!filters.week_day || !filters.subject || !filters.time ){
            return response.status(400).json({
                error: 'Missing filter to search classes.'
            })
        }

        const subject = filters.subject as string;
        const week_day = Number(filters.week_day as string);
        const time = filters.time as string;

        const timeInMinutes = convertHoutToMinutes(time)

        const classes = await db('classes')
                                .whereExists(function(){
                                    //nao uso arrow funcion pois nao cria um novo scopo (this)
                                    this.select('class_schedule.*')
                                        .from('class_schedule')
                                        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                                        .whereRaw('`class_schedule`.`week_day` = ??', [week_day])
                                        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                                        .whereRaw('`class_schedule`.`to` >  ??', [timeInMinutes] )
                                })
                                .where('classes.subject', '=', subject)
                                .join('users', 'classes.user_id', '=', 'users.id')
                                .select(['classes.*', 'users.*'])

        return response.json(classes)
    }

    //criacao assincrona
    async create (request : Request, response : Response) {
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
    
        try{
                
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
    
            //codigo de executado com sucesso
            return response.status(201).send()
        } catch(err){
            await trx.rollback()
    
            //codigo 400 é um tipo de erro
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
    
        }
       
    }
}