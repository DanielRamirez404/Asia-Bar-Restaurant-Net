import FormPage from './reusables/form-page';
import { RequiredInputBox } from './reusables/form-page';
import './reusables/styles.css'

function Login() {
  return (
    <FormPage title={ "Inicio de Sesión" } content= {(
        <>
            <RequiredInputBox title={ "Nombre de Usuario" } />
            <RequiredInputBox title={ "Contraseña" } />
           
            <button className='submit-button' type='submit'>Acceder</button>
        </>
    )} />
  );
}

export default Login;