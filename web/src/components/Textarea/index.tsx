import React, { TextareaHTMLAttributes} from 'react'

import './style.css'

/**
 * Extend um tipo TextareaHTMLAttributes que contém todos os tipos
 * de atributos de um tipo Textarea em HTML.
 * 
 * Isso permitira que ao usar este componente, o usuario possa 
 * passar outras definicoes de um Textarea
 */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}


/**
 * usando a destruturacao das props {name, label}
 * ...rest => rest operator, uma forma para deixar aberta a inclusao de 
 *            outros atributos do HTML
 * {...rest} => Spread operator
 */


const Textarea: React.FC<TextareaProps> = ({name, label, ...rest}) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    )
}

export default Textarea;