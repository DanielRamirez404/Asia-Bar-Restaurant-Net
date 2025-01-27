import FormPage from './reusables/form-page';
import { RequiredInputBox } from './reusables/form-page';
import { Link } from 'react-router-dom';
import './reusables/styles.css'
import { PagePaths } from '../pagination/paths';

function Request({title}) {
  return (
    <FormPage title={ title } content= {(
        <>
            <RequiredInputBox title={ "Nombre de Usuario" } />
            <RequiredInputBox title={ "Contraseña" } />
            <RequiredInputBox title={ "Confirmar Contraseña" } />

            <Link to={ PagePaths['Login'] } >
                <button className='go-back-button'>Volver</button>
            </Link>

            <button className='submit-button' type='submit'>Solicitar</button>
        </>
    )} />
  );
}

export default Request;