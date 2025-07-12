import './form.css';

export function RequiredInputBox({ title, textSetter, type = 'text', regex = null, value = null }) {
    return(
        <div className='input-box'>
            <label for={ title }>
                { title }
            </label>
            
            <input 
                type={ type } 
                id={ title } 
                placeholder={ title } 
                pattern={regex} 
                onChange={ (e) => textSetter(e.target.value) } 
                value={ value }
            >
            </input>
        </div>
    );
} 
