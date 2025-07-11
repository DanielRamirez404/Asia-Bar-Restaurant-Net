import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Form from '../components/layout/form.js';
import { RequiredInputBox } from '../components/ui/form.js';
import { onLogin } from '../utils/api.js';

function Login() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
    <Form onSubmit={ (e) => onLogin(e, username, password, navigate) } title={ "Inicio de Sesión" } content= {(
        <>
            <RequiredInputBox title={ "Nombre de Usuario" } textSetter={ setUsername } />
            <RequiredInputBox type='password' title={ "Contraseña" } textSetter={ setPassword } />

            <button className='submit-button' type='submit'>Acceder</button>
        </>
    )} />
  );
}

export default Login;
