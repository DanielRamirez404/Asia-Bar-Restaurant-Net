import FormPage from './reusables/form-page';
import { RequiredInputBox, RequiredPhoneInput, SelectableInput, SelectablePhoneInput } from './reusables/form-page';
import './reusables/styles.css'
import { Link } from 'react-router-dom';
import { PagePaths } from '../pagination/paths';

function Clients({title}) {
  return (
    <FormPage title={ title } content= {(
        <>
            <RequiredInputBox title={ "Nombre" } />
            <SelectableInput title="Cédula / Rif" options={ ["V-", "J-"] } />
            <SelectableInput title="Dirección" options={ ["Barcelona", "Lechería", "PLC"] } isOptionalInput={ true } />            
            <SelectablePhoneInput title={ "Teléfono" } prefixes={["0412-", "0414-", "0424-", "0416-", "0426-"]} />
           
            <Link to={ PagePaths['Home'] } >
                <button className='go-back-button'>Volver</button>
            </Link>

            <button className='submit-button' type='submit'>Guardar</button>       
        </>
    )} />
  );
}

export default Clients;