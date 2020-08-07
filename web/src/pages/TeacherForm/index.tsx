import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom'                             // para redirecionar para uma pagina atraves da programacao

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './style.css'

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherForm(){
    const history = useHistory()

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')


    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')


    /*
    O React nao fica observando variaveis comuns, somente observa se uma variavel foi criada usando o conceito de estado.

    O useState retorna um vetor (2 coisas), o primeiro sao os itens do calendario e o segundo eh uma funcao que pode substituir o valor do scheduleItems
    
    Quando se usa o estado no React, nao se pode fazer modificacoes diretas na variavel devido ao conceito de imutabilidade das variaveis.
    */
    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems, //spread operator faz uma copia do array original
            {week_day: 0, from: '', to: ''}
        ])
    }

    function setScheduleItemValue(position : number, field: string, value : string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                /**
                 * copia o item objeto, no caso {week_day: 0, from: '', to: ''}
                 * 
                 * [field] => é a forma de passar que a variavel do campo é week_day
                 *         => se fosse somente field, definiria o nome de uma campo novo.
                 * 
                 * Assim... ao notar que ja existe o atributo week_day dentro do objeto {week_day: 0, from: '', to: ''}, vai sobrescrever o valor
                 */
                return {...scheduleItem, [field]: value}
            }
            return scheduleItem
        })

        setScheduleItems(updatedScheduleItems)
    }

    function handleCreateClass(e: FormEvent){
        //previne a recarga da pagina devido o submit do form
        e.preventDefault()
        
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems

        }).then(() => {
            alert('Cadastro realiado com sucesso!')

            history.push('/')                               // apos salvar envia para a landing page
        }).catch(() =>{
            alert('Erro no cadastro!')
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher este formulário de inscrição">

            </PageHeader>

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input 
                            name="name" 
                            label="Nome Completo"
                            value={name}
                            onChange={(e) =>{setName(e.target.value)}} />
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar}
                            onChange={(e) =>{setAvatar(e.target.value)}}
                        />
                        <Input 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) =>{setWhatsapp(e.target.value)}}
                        />
                        <Textarea 
                            name="bio" 
                            label="Biografia"
                            value={bio}
                            onChange={(e) =>{setBio(e.target.value)}}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                            name="subject" 
                            label="Matéria"
                            value={subject}
                            onChange={(e) =>{setSubject(e.target.value)}}
                            options ={[
                                {value: 'Artes', label: 'Artes'},
                                {value: 'Biologia', label: 'Biologia'},
                                {value: 'Fisica', label: 'Fisica'},
                                {value: 'Geografia', label: 'Geografia'},
                                {value: 'Historia', label: 'Historia'},
                                {value: 'Matematica', label: 'Matematica'},
                                {value: 'Portugues', label: 'Portugues'},
                                {value: 'Quimica', label: 'Quimica'},
                            ]} />
                        <Input 
                            name="cost" 
                            label="Custo da sua hora/aula" 
                            value={cost}
                            onChange={(e) =>{setCost(e.target.value)}}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>
                    </fieldset>

                    {scheduleItems.map((scheduleItem, index) =>{
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week-day" 
                                    label="Dia da Semana"
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options ={[
                                        {value: '0', label: 'Domingo'},
                                        {value: '1', label: 'Segunda'},
                                        {value: '2', label: 'Terça'},
                                        {value: '3', label: 'Quarta'},
                                        {value: '4', label: 'Quinta'},
                                        {value: '5', label: 'Sexta'},
                                        {value: '6', label: 'Sábado'},
                                    ]} />
                                <Input 
                                    name="from" 
                                    label="Das" 
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />
                                <Input 
                                    name="to" 
                                    label="Até" 
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                            </div>
                        )
                    })}

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type='submit'>
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;