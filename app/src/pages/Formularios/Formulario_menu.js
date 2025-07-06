"use client"

import { useState } from "react"
import { Coffee, Tags, Hash, DollarSign } from 'lucide-react'
import "./formulario.css"

import FormPage from "../../components/layout/form.js";
import { RequiredInputBox, RequiredSelector } from '../reusables/form-page';

function FormularioMenu({ onClose = () => {} }) {
  const [formData, setFormData] = useState({
    nombre: "",
    categoria: "",
    disponibilidad: "",
    precio: "",
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
    console.log("Datos del formulario de menú:", formData)
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
    <FormPage className="modal-overlay" onClick={handleOverlayClick} title={"Plato"} content={(
     

      <>
            <RequiredInputBox
              type="text"
              title="Nombre"
              
            />


            <RequiredSelector
              
              mainTitle="categoria"
              options={["opcion 1","opcion 2","opcion 3"]}
            />
  
  <RequiredInputBox
              type="checkbox"
              title="Disponibilidad"
              
            />

          
      <RequiredInputBox
              type="number"
              title="Precio"
              
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
              Agregar al Menú
            </button>
          </div>
          </>
      )}/>
    
  )
}

export default FormularioMenu
