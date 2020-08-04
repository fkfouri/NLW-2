import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem() {
    return(
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
    )
}

export default TeacherItem;