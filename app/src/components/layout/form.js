import './form.css';

function Form({ title, children, onSubmit = () => {}}) {
    return (
        <div className='form-page'>
            <form onSubmit={ onSubmit } id={ title } class='frame-form'> 
                <h1>{ title }</h1>
                
                <hr></hr>

                { children }
            </form>
        </div>
    );
}  
  
export default Form; 
