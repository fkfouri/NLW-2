import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './style.css'

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';


function TeacherForm(){
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher este formulário de inscrição">

            </PageHeader>

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                        name="subject" 
                        label="Matéria"
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
                    <Input name="cost" label="Custo da sua hora/aula" />
                </fieldset>
                <fieldset>
                    <legend>
                        Horários Disponíveis
                        <button type="button">
                            + Novo horário
                        </button>
                    </legend>
                </fieldset>
                <div className="schedule-item">
                    <Select 
                        name="week-day" 
                        label="Dia da Semana"
                        options ={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda'},
                            {value: '2', label: 'Terça'},
                            {value: '3', label: 'Quarta'},
                            {value: '4', label: 'Quinta'},
                            {value: '5', label: 'Sexta'},
                            {value: '6', label: 'Sábado'},
                        ]} />
                    <Input name="from" label="Das" type="time" />
                    <Input name="to" label="Até" type="time" />
                </div>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type='button'>
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;