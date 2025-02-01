import FormPage from './reusables/form-page';
import { RequiredInputBox } from './reusables/form-page';
import './reusables/styles.css'
import { Link } from 'react-router-dom';
import { PagePaths } from '../pagination/paths';

function Clients({title}) {
  return (
    <FormPage title={ title } content= {(
        <>
            <RequiredInputBox title={ "Nombre" } />
            <RequiredInputBox title={ "Cédula / RIF" } />
            <RequiredInputBox title={ "Dirección" } />
            <RequiredInputBox title={ "Teléfono" } />

           
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

export default Clients;