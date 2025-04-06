import FormPage from './reusables/form-page';
import { RequiredInputBox } from './reusables/form-page';
import './reusables/styles.css'
import { Link } from 'react-router-dom';
import { PagePaths } from '../pagination/paths';
import { onLogin } from '../on-fetch-endpoints/session.js';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
    <FormPage onSubmit={ (e) => onLogin(e, username, password, navigate) } title={ "Inicio de Sesión" } content= {(
        <>
            <RequiredInputBox title={ "Nombre de Usuario" } textSetter={ setUsername } />
            <RequiredInputBox type='password' title={ "Contraseña" } textSetter={ setPassword } />

            <button className='submit-button' type='submit'>Acceder</button>
        </>
    )} />
  );
}

export default Login;
