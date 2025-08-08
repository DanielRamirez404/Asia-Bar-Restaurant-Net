import { useState, useEffect } from "react";

import { Search } from "lucide-react";
import './form.css';

export function RequiredInputBox({ title, textSetter, type = 'text', regex = null, value = null, options = {} }) {
    return(
        <div className='input-box'>
            <label htmlFor={ title }>
                { title }
            </label>
            
            <input 
                type={ type } 
                id={ title } 
                placeholder={ title } 
                pattern={ regex } 
                onChange={ (e) => textSetter(e.target.value) } 
                value={ value }
                { ...options }
                required
            >
            </input>
        </div>
    );
}

export function RequiredNumberBox({ title, textSetter, isDecimal = false, value = null }) {
    const inputValue = isDecimal ? parseFloat(value).toFixed(2) : value;  
    const minValue = isDecimal ? 0.01 : 1;
        
    return (
        <RequiredInputBox 
            title={ title }
            type={ "number" }
            textSetter={ textSetter }
            value={ inputValue }
            options = {{
                min: minValue,
                step: minValue
            }}
        />
    );
}

export function SearchInputBox({ textSetter, value = null }) {
    return (
       <>
            <Search className="search-icon" />

            <input
                type="text"
                className="search-input-box"
                placeholder="Buscar"
                value={ value }
                onChange={ (e) => textSetter(e.target.value) }
            />
        </>
    );
}

function Selector({ title, options, onChange, value = null }) {
    return(
        <div className="input-box">
            <label htmlFor={ title }>{ title }</label>
            <select 
                className="selector" 
                id={ title } 
                value={ value }
                onChange={ onChange }
                required
            >
                { options.map( (option, i) => <option key={`${option}-${i}`} value={option}>{option}</option> ) }
            </select>
        </div>
    );
}

export function RequiredSelector({ title, options, textSetter, value = null}) {
    const defaultValue = value || options[0];

    useEffect(() => {
        textSetter(defaultValue);
    }, []);

    return( 
        <Selector
            title={title}
            options={options}
            onChange={ (e) => textSetter(e.target.value) }
            value={defaultValue}
        />
    );
}

export function RequiredBoolean({ title, textSetter, value = null}) {
    const defaultValue = value || 0;

    useEffect(() => {
        textSetter(defaultValue);
    }, []);

    const options = ["No", "Sí"];

    return ( 
        <Selector
            title={title}
            options={options}
            onChange={ (e) => {
                const eventValue = e.target.value;
                console.log(eventValue);
                textSetter(eventValue === "Sí" ? 1 : 0); 
            }}
            value={ options[defaultValue] }
        />
    );
};
