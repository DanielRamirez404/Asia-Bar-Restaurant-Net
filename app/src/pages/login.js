import FormPage from './reusables/form-page';
import { RequiredInputBox } from './reusables/form-page';
import './reusables/styles.css'
import { Link } from 'react-router-dom';
import { PagePaths } from '../pagination/paths';

function Login() {
  return (
    <FormPage title={ "Inicio de Sesión" } content= {(
        <>
            <RequiredInputBox title={ "Nombre de Usuario" } />
            <RequiredInputBox type='password' title={ "Contraseña" } />
           
            <Link to={ PagePaths['Home'] } >
               <button className='submit-button' type='submit'>Acceder</button>       
            </Link>

{
/*
            <Link to={ PagePaths['SignUp'] }>
                <p className='hyperlink'>Solicitar nueva cuenta</p>
            </Link>
            <Link to={ PagePaths['PasswordChange'] }>
                <p className='hyperlink'>Solicitar nueva contraseña</p>
            </Link>
*/
}
        </>
    )} />
  );
}

export default Login;