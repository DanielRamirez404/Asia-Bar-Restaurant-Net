import { useState } from "react";
import ControlForm from "../../components/layout/control-form.js";
import { RequiredInputBox, RequiredSelector } from "../reusables/form-page";

function FormularioUsuario() {

    const [username, setUsername] = useState("");
    const [rol, setRol] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <ControlForm onSubmit={ (e) => alert("hello") } title={ "Usuario" } goBackPath="/control" 
            content= {(
                <>
                    <RequiredInputBox title={"Usuario"} textSetter={ setUsername } />
                    <RequiredSelector mainTitle={"Tipo"} options={["Administrador", "Cocinero", "Empleado"]} />
                    <RequiredInputBox type='password' title={ "Contraseña" } textSetter={ setPassword } />
                </>
            )} 
        />
    );
}

export default FormularioUsuario;
