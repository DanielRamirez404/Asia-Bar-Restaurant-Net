import FormPage from '../../pages/reusables/form-page.js';
import { SubmitButton, GoBackButton } from '../ui/buttons.js';
import './controlForm.css';

function ControlForm({onSubmit, title, content, goBackPath}) {
    return (
        <FormPage onSubmit={ onSubmit } title={ title } 
            content= {(
                <>
                    {content}

                    <div className="buttons">
                        <GoBackButton text="Cancelar" to={goBackPath} />
                        <SubmitButton text="Continuar" />
                    </div>
                </>
            )} 
        />
    );
}

export default ControlForm;
