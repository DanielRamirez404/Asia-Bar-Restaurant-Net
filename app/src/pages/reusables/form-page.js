import React, { useState } from 'react';
import './constants.css';
import './form-page.css';

export function RequiredInputBox({ title, type='text' }) {
    return(
        <div className='input-box'>
            <label for={ title }>{ title }</label>
            <input type={type} id={ title } placeholder={ title } required></input>
        </div>
    );
} 

export function RequiredPhoneInput({ title }) {
    return(
        <div className='input-box'>
            <label for={ title }>{ title }</label>
            <input type='tel' id={ title } placeholder={ title } pattern="[0-9]{4}-[0-9]{7}" required></input>
            <p className='input-note'>Formato: 0000-1234567</p>
        </div>
    );
}

export function SimpleSelector({ mainTitle, options, onChange }) {
    
    const selectionValues = new Set(options);
    const idName = mainTitle + " selector";

    return(
        <>
            <select className="simple-selector" id={ idName } defaultValue={ selectionValues[0] } onChange={ () => {
                const selector = document.getElementById(idName);
                
                if (selector)
                    onChange(selector.value)
            }}>
                { [...selectionValues].map( option => <option value={option}>{option}</option> ) }
            </select>
        </>
    );
}

export function SelectableInput({title, options, isOptionalInput = false}) {

    const [isInputVisible, setInputVisibility] = useState(!isOptionalInput);

    const noValue = "N/A";

    if (isOptionalInput)
        options.push(noValue);

    return(
        <div className='input-box'>
            <label for={title}>{title}</label>
            <div className='input-row'>
                <SimpleSelector mainTitle={title} options={options} onChange={ (value) => setInputVisibility( (isOptionalInput) ? value == noValue : true ) } />
                { (isInputVisible) ? <input type='text' id={ title } placeholder={ title } required></input> : null }
            </div>
        </div>
    );
}

function FormPage({ title, content }) {
    return (
        <div className='form-page'>
            <form id={ title } class='frame-form'>
  
                <h1>{ title }</h1>
                
                <hr></hr>

                { content }

            </form>
        </div>
    );
}  
  
export default FormPage; 