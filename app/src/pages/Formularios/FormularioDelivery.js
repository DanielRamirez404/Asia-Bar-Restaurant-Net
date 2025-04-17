import { useState } from "react";
import "./formulario.css";

import FormPage from "../reusables/form-page";
import { RequiredInputBox } from "../reusables/form-page";

function FormularioDelivery({ onClose = () => {} }) {
  const [formData, setFormData] = useState({
    nombre: "",
    zona: "",
    disponibilidad: "",
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
    console.log("Datos del formulario de repartidor:", formData);
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
      title={"Nuevo Repartidor"}
      onSubmit={handleSubmit}
      content={
        <>
          <RequiredInputBox
            type="text"
            title="Nombre"
            name="nombre"
            textSetter= {()=>{}}
            regExKey={'soloLetras'}
          />

          <RequiredInputBox
          type="text"
          title="Apellido"
          name = "Apellido"
          textSetter={()=>{}}
          regExKey={'soloLetras'}
          />
          <RequiredInputBox
            type="text"
            title="Zona"
            name="zona"
            textSetter= {()=>{}}
          />
          <RequiredInputBox
            type="checkbox"
            title="Disponibilidad"
            name="disponibilidad"
            textSetter= {()=>{}}
          />
          <RequiredInputBox
            type="text"
            title="Teléfono"
            name="telefono"
            textSetter= {()=>{}}
            regExKey={"telefono"}
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
              Agregar Repartidor
            </button>
          </div>
        </>
      }
    />
  );
}

export default FormularioDelivery;