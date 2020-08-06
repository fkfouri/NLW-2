import React, { InputHTMLAttributes} from 'react'

import './style.css'

/**
 * Extend um tipo InputHTMLAttributes que contém todos os tipos
 * de atributos de um tipo input em HTML.
 * 
 * Isso permitira que ao usar este componente, o usuario possa 
 * passar outras definicoes de um input
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}


/**
 * usando a destruturacao das props {name, label}
 * ...rest => rest operator, uma forma para deixar aberta a inclusao de 
 *            outros atributos do HTML
 * {...rest} => Spread operator
 */


const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    )
}

export default Input;