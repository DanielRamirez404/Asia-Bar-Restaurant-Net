import FormPage from './reusables/form-page';
import { RequiredInputBox } from './reusables/form-page';
import './reusables/styles.css'
import { Link } from 'react-router-dom';
import { PagePaths } from '../pagination/paths';
import { onLogin } from '../on-fetch-endpoints/session.js';
import { useNavigate } from "react-router-dom";

function Login() {
   
    const navigate = useNavigate();

    return (
    <FormPage onSubmit={ (e) => onLogin(e, "admin", "admin", navigate) } title={ "Inicio de Sesión" } content= {(
        <>
            <RequiredInputBox title={ "Nombre de Usuario" } />
            <RequiredInputBox type='password' title={ "Contraseña" } />

            <button className='submit-button' type='submit'>Acceder</button>
        </>
    )} />
  );
}

export default Login;
