import React from 'react';
import './constants.css';
import './form-page.css';

export function RequiredInputBox({ title }) {
    return(
        <div class='input-box'>
            <label for={ title }>{ title }</label>
            <input type='text' id={ title } placeholder={ title } required></input>
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