import React, { useState } from 'react';
import './constants.css';
import './form-page.css';
import { regExDic } from './regExDic';
export function RequiredInputBox({ title, textSetter, regExKey, type='text' }) {

    const regex = regExDic[regExKey] || {};

    return(
        <div className='input-box'>
            <label for={ title }>{ title }</label>
            <input 
                type={ type } 
                id={ title } 
                placeholder={ title } 
                onChange={ (e) => textSetter(e.target.value) }
                pattern={regex.pattern}
                title={regex.title}
                >
            </input>
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

export function RequiredSelector({ mainTitle, options, onChange }) {
    
    const selectionValues = new Set(options);
    const title = mainTitle;

    return(
        <div className="input-box">
            <label for={ title }>{ title }</label>
            <select className="input" id={ title } defaultValue={ selectionValues[0] } onChange={ () => {
                const selector = document.getElementById(title);
                
                if (selector)
                    onChange(selector.value)
            }}>
                { [...selectionValues].map( option => <option value={option}>{option}</option> ) }
            </select>
        </div>
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

export function SelectablePhoneInput({title, prefixes}) {

    const [doesPrefixExist, setPrefixExistence] = useState(true);
    
    const noValue = "N/A";
    prefixes.push(noValue);

    return (
        <div className='input-box'>
            <label for={title}>{title}</label>
            <div className='input-row'>
                <SimpleSelector mainTitle={title} options={prefixes} onChange={ (value) => setPrefixExistence( value != noValue ) } />
                { 
                    (doesPrefixExist) 
                        ? <input type='tel' id={ title } placeholder={ title } pattern="[0-9]{7}" required></input>   
                        : <input type='text' id={ title } placeholder={ title } required></input>
                }
            </div>
            { (doesPrefixExist) ? <p className='input-note'>Formato: 0000-1234567</p> : null }  
        </div>
    );
}

function FormPage({ title, onSubmit = null, content }) {
    return (
        <div className='form-page'>
            <form onSubmit={ onSubmit } id={ title } class='frame-form'>
  
                <h1>{ title }</h1>
                
                <hr></hr>

                { content }

            </form>
        </div>
    );
}  
  
export default FormPage; 
