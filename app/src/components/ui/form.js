import { useState, useEffect } from "react";

import { Search } from "lucide-react";
import './form.css';

import { idTypes, phonePrefixes } from "../../config/tables.js";

function InputBoxWrapper({ title, children }) {
    return(
        <div className="input-box">
            {   
                !title ? null : (
                    <label htmlFor={ title }>
                        { title }
                    </label>
                )
            }
            { children }
        </div>
    );
}

export function RequiredInputBox({ title, textSetter, type = 'text', regex = null, value = null, options = {} }) {
    return(
        <InputBoxWrapper title={title}>
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
        </InputBoxWrapper>
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

function Selector({ title = null, options, onChange, value = null }) {
    return(
        <div className="input-box">
            { title ? <label htmlFor={ title }>{ title }</label> : null}
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

export function RequiredSelector({ title = null, options, textSetter, value = null}) {
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

function getAllOptions(options) {
    const all = [...options];
    all.push("N/A");
    return all; 
}

export function RequiredOptionalSelector({ title, options, textSetter, value }) {
    const allOptions = getAllOptions(options);

    const [selected, setSelected] = useState("");
    const [text, setText] = useState("");

    const isSelecting = selected !== "N/A";

    useEffect(() => {
        const found = options.find( (option) => option === value);
        setSelected(found ?? "N/A");
        setText(found ? "" : value);
    }, [value]);
    
    useEffect(() => {
        textSetter(isSelecting ? selected : text);
    }, [isSelecting, selected, text]);

    return (
        <>
            <RequiredSelector
                title={title}
                options={allOptions}
                textSetter={setSelected}
                value={selected}
            />

            {isSelecting ? null : 
                <RequiredInputBox
                    textSetter={setText}
                    value={text}
                />
            }
        </>
    );
}

function getPhone(prefix, text) {
    if (prefix === "N/A")
        return text;

    return prefix + text; 
}

function getPrefix(string, size) {
    const reversed = string.split('').reverse().join('');
    const numbers = reversed.slice(-size);
    const prefix = numbers.split('').reverse().join('');
    return prefix;
}

export function RequiredPhoneInput({ title, value, textSetter }) {
    const allOptions = getAllOptions(phonePrefixes); 
    const prefixLength = 4;
    
    const possiblePrefix = getPrefix(value, prefixLength);
    const foundPrefix = phonePrefixes.find( (option) => option === possiblePrefix);

    const selected = foundPrefix || "N/A";
    const usesPrefix = selected !== "N/A";
    const displayValue = usesPrefix ? value.slice(prefixLength) : value;

    const onChangeSelection = (prefix) => {
        textSetter( getPhone(prefix, displayValue) );
    };

    const onTextInput = (input) => {
        textSetter( getPhone(selected, input) );
    }

    return (
        <InputBoxWrapper title={title}> 
            <div className="phone-input-container">
                <div className="prefix-container">
                    <RequiredSelector
                        options={allOptions}
                        textSetter={onChangeSelection}
                        value={selected}
                    />
                </div>

                <div className="phone-text-container">
                    <RequiredInputBox
                        textSetter={onTextInput}
                        value={displayValue}
                    />
                </div>
            </div>
        </InputBoxWrapper>
    );
}


function getIDType(string, size) {
    const reversed = string.split('').reverse().join('');
    const numbers = reversed.slice(-size);
    const prefix = numbers.split('').reverse().join('');
    return prefix;
}

function getID(type, code) {
    if (type === "N/A")
        return code;

    return type + code; 
}

export function RequiredIdInput({ title, value, textSetter }) {
    const allOptions = getAllOptions(idTypes); 
    const typeLength = 2;
    
    const possibleType = getIDType(value, typeLength);
    const foundType = idTypes.find( (option) => option === possibleType);

    const selected = foundType || "N/A";
    const usesType = selected !== "N/A";
    const displayValue = usesType ? value.slice(typeLength) : value;

    const onChangeSelection = (type) => {
        textSetter( getID(type, displayValue) );
    };

    const onTextInput = (input) => {
        textSetter( getID(selected, input) );
    }

    return (
        <InputBoxWrapper title={title}> 
            <div className="phone-input-container">
                <div className="prefix-container">
                    <RequiredSelector
                        options={allOptions}
                        textSetter={onChangeSelection}
                        value={selected}
                    />
                </div>

                <div className="phone-text-container">
                    <RequiredInputBox
                        textSetter={onTextInput}
                        value={displayValue}
                    />
                </div>
            </div>
        </InputBoxWrapper>
    );
}
