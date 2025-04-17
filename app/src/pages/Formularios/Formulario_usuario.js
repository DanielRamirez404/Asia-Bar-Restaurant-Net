"use client";

import { useState } from "react";
import FormPage from "../reusables/form-page";
import { RequiredInputBox, RequiredSelector } from "../reusables/form-page";
import "../reusables/styles.css";

function FormularioUsuario({ onClose = () => {} }) {
  const [formData, setFormData] = useState({
    usuario: "",
    tipo: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario de usuario:", formData);
    // Lógica para enviar los datos
    onClose();
  };

  return (
    <FormPage
      title={"Usuario"}
      onSubmit={handleSubmit}
      content={
        <>
          <RequiredInputBox
            title={"Usuario"}
            type="text"
            name="usuario"
            textSetter= {(value) =>
              setFormData((prevState) => ({ ...prevState, tipo: value }))}
            
          />
          <RequiredSelector
            mainTitle={"Tipo"}
            options={["Administrador", "Cocinero", "Empleado"]}
            onChange={(value) =>
              setFormData((prevState) => ({ ...prevState, tipo: value }))
            }
          />
          <RequiredInputBox
            title={"Contraseña"}
            type="password"
            name="contraseña"
            textSetter= {(value) =>
              setFormData((prevState) => ({ ...prevState, tipo: value }))}
          />


          <div className="botones">
            <button
              type="button"
              className="go-back-button"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              Continuar
            </button>
          </div>
        </>
      }
    />
  );
}

export default FormularioUsuario;