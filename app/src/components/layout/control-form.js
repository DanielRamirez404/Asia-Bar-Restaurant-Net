import Form from './form.js';
import { SubmitButton, GoBackButton } from '../ui/buttons.js';

import { routes } from '../../config/routes.js'; 

import './control-form.css';

function ControlForm({onSubmit, title, children}) {
    return (
        <Form onSubmit={ onSubmit } title={ title } >
            <>
                {children}

                <div className="buttons">
                    <GoBackButton text="Volver" to={ routes['Control'] } />
                    <SubmitButton text="Continuar" />
                </div>
            </>
        </Form>
    );
}

export default ControlForm;
