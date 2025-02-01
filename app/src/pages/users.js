import FormPage from './reusables/form-page';
import { RequiredInputBox } from './reusables/form-page';
import './reusables/styles.css'
import { Link } from 'react-router-dom';
import { PagePaths } from '../pagination/paths';

function Users({title}) {
  return (
    <FormPage title={ title } content= {(
        <>
            <RequiredInputBox title={ "Nombre de Usuario" } />
            <RequiredInputBox title={ "Contraseña" } />
            <RequiredInputBox title={ "Repetir Contraseña" } />
           
            <Link to={ PagePaths['Home'] } >
                <button className='go-back-button'>Volver</button>
            </Link>

            <Link to={ PagePaths['Home'] } >
               <button className='submit-button' type='submit'>Guardar</button>       
            </Link>
        </>
    )} />
  );
}

export default Users;