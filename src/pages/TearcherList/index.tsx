import React from 'react';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="week-day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9_Hcz-dXJCyuQ1EEO8dbslG5_Mtlf4eb0dimGx=s83-c-mo" alt="Fabio Kfouri"/>
                        <div>
                            <strong>Fabio Kfouri</strong>
                            <span>Matemática</span>
                        </div>
                    </header>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Cras et molestie erat. Vestibulum auctor feugiat varius. Fusce sed tortor imperdiet, efficitur velit a, dapibus eros. Proin mollis dolor ut leo.
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 45,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>

            </main>
        </div>
    )
}

export default TeacherList;