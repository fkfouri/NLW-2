import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

//cria uma variavel javascript
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'



import './style.css';
import api from '../../services/api';

function Landing(){
    const [totalConnection, setTotalConnections] = useState(0)

    /**
     * useEffect é uma funcao com dois paramentros. O primeiro eh uma funcao, e a segunda sao as informacoes de quando disparar a funcao do primeiro parametro.
     * Por exemplo, a funcao que atualiza o numero de conexoes, por exemplo... numero de likes. Um like novo dispara a funcao definida no primeiro parametro
     * 
     * Quando quero executar somente uma vez a funcao, no comeco do componente
     * deixo o segundo parametro como vazio [].
     * 
     * No segundo parametro posso colocar uma variavel, e toda vez que for chamado essa 
     * variavel dispara a funcao.
     */
    useEffect(() =>{
        //nome da rota. pode ter ou nao o '/'
        api.get('/connections').then(response =>{
            //console.log(response)

            const {total} = response.data;

            setTotalConnections(total);
        })
    }, [])

    return (
            <div id="page-landing">
                <div id="page-landing-content" className="container">
                    <div className="logo-container">
                        <img src={logoImg} alt="Proffy"/>
                        <h2>Sua plataforma de estudos online.</h2>
                    </div>
                    <img 
                        src={landingImg} 
                        alt="Plataforma de estudos"
                        className="hero-image"
                    />
                    <div className="buttons-container">
                        <Link to="/study" className="study">
                            <img src={studyIcon} alt="Estudar"/>
                            Estudar
                        </Link>
                        <Link to="/give-classes" className="give-classes">
                            <img src={giveClassesIcon} alt="Dar Aulas"/>
                            Dar Aulas
                        </Link>
                    </div>
                    

                    <span className="total-connections">
                        Total de {totalConnection} conexões realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                    </span>
                </div>
            </div>

    )
}

export default Landing;