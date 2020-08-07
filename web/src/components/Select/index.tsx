import React, { SelectHTMLAttributes} from 'react'

import './style.css'

/**
 * Extend um tipo SelectHTMLAttributes que contém todos os tipos
 * de atributos de um tipo Select em HTML.
 * 
 * Isso permitira que ao usar este componente, o usuario possa 
 * passar outras definicoes de um Select
 */
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
        value: string
        label: string
    }>
}


/**
 * usando a destruturacao das props {name, label}
 * ...rest => rest operator, uma forma para deixar aberta a inclusao de 
 *            outros atributos do HTML
 * {...rest} => Spread operator
 */


const Select: React.FC<SelectProps> = ({name, label, options, ...rest}) => {
    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}>
                <option value="" disabled selected hidden>Selecione uma opção</option>
                {options.map( option =>{
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select;