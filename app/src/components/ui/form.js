import { Search } from "lucide-react";
import './form.css';

export function RequiredInputBox({ title, textSetter, type = 'text', regex = null, value = null }) {

    const isNumber = /^\d*\.?\d+$/.test(value);
    const isDecimal = type === "number" && isNumber && String(value).includes(".");

    return(
        <div className='input-box'>
            <label for={ title }>
                { title }
            </label>
            
            <input 
                type={ type } 
                id={ title } 
                placeholder={ title } 
                pattern={ regex } 
                onChange={ (e) => textSetter(e.target.value) } 
                value={ isDecimal ? parseFloat(value).toFixed(2) : value }
                min={ type === "number" ? 0 : null }
                step={ type === "number" ? 0.01 : null }
                required
            >
            </input>
        </div>
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

export function RequiredSelector({ title, options, textSetter, value = null }) {
    return(
        <div className="input-box">
            <label for={ title }>{ title }</label>
            <select className="selector" id={ title } defaultValue={ value ?? options[0] } onChange={ () => {
                const selector = document.getElementById(title);
                
                if (selector)
                    textSetter(selector.value)
            }}>
                { options.map( option => <option value={option}>{option}</option> ) }
            </select>
        </div>
    );
}
