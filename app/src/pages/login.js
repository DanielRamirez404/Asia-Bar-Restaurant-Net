import React from 'react';
import './reusables/constants.css'
import './login.css'

function Login() {

  return (

    <div className="Login">

        <div class='frameLogin'>

            <h1>Iniciar Sesión</h1>

            <hr></hr>
            <form id='inicioDeSesion'>
                <div class='inputBox'>

                    <label for = 'user'>Usuario</label>

                    <input type='text'  id = 'user'placeholder="Nombre de usuario" required></input>

                </div>

                
                <div class='inputBox'>

                    <label for = 'password'>Contraseña</label>

                    <input type='password' id='password'   placeholder="Contraseña" required ></input>

                </div>


                <button type='submit'>Acceder</button>
            </form>
        </div>
      
    </div>



  );
}





export default Login;