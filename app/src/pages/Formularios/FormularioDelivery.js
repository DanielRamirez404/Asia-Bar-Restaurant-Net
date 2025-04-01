"use client"

import { useState } from "react"
import { User, MapPin, Info, Phone } from 'lucide-react'
import "./formulario.css"


import FormPage from '../reusables/form-page';
import { RequiredInputBox, RequiredSelector } from '../reusables/form-page';

function FormularioDelivery({ onClose = () => {} }) {
  const [formData, setFormData] = useState({
    nombre: "",
    zona: "",
    disponibilidad: "",
    telefono: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Datos del formulario de repartidor:", formData)
    // Lógica para enviar los datos
    onClose()
  }

  // Cierra el formulario si se hace clic fuera del contenedor
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <FormPage className="modal-overlay" onClick={handleOverlayClick} title={"Nuevo Repartidor"} content= {(

      <>
      
       

            <RequiredInputBox
              type="text"
              title="Nombre"
         
            />
          

          
            <RequiredInputBox
              type="text"
              title="Zona"
           
            />
      

          
            <RequiredInputBox
              type="checkbox"
              title="Disponibilidad"
            
            />
          

         
            <RequiredInputBox
              type="text"
              title="Telefono"
             
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
    )} />
  );
}

export default FormularioDelivery