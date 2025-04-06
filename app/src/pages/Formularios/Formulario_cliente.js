import { useState } from "react";
import "./formulario.css"; // Asegúrate de que esta importación esté presente

import FormPage from "../reusables/form-page";
import { RequiredInputBox } from "../reusables/form-page";

function FormularioCliente({ onClose = () => {} }) {
  const [formData, setFormData] = useState({
    identificacion: "",
    nombre: "",
    direccion: "",
    telefono: "",
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
    console.log("Datos del formulario de cliente:", formData);
    // Lógica para enviar los datos
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <FormPage
      className="modal-overlay"
      onClick={handleOverlayClick}
      title={"Cliente"}
      onSubmit={handleSubmit}
      content={
        <>
          <RequiredInputBox
            type="text"
            title="Identificación"
            name="identificacion"
            onChange={handleChange}
          />
          <RequiredInputBox
            type="text"
            title="Nombre"
            name="nombre"
            onChange={handleChange}
          />
          <RequiredInputBox
            type="text"
            title="Dirección"
            name="direccion"
            onChange={handleChange}
          />
          <RequiredInputBox
            type="text"
            title="Teléfono"
            name="telefono"
            onChange={handleChange}
          />
          <div className="botones">
            <button
              type="button"
              className="btn-cancelar"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className="btn-continuar">
              Agregar Cliente
            </button>
          </div>
        </>
      }
    />
  );
}

export default FormularioCliente;