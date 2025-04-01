"use client"

import { useState } from "react"
import { Utensils, Tags, Info, DollarSign } from 'lucide-react'
import "./formulario.css"

import FormPage from '../reusables/form-page';
import { RequiredInputBox, RequiredSelector } from '../reusables/form-page';

function FormularioContorno({ onClose = () => {} }) {
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
    console.log("Datos del formulario de contorno:", formData)
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
    <FormPage className="modal-overlay" onClick={handleOverlayClick} title={"Nuevo Contorno"} content={(
      <>
        <RequiredInputBox type="text" title="Nombre"/>
        

            <RequiredSelector
              type="text"

              mainTitle="Categoria"

              options={[1,2,3,4]}
              
              id = "comboboxCategorias"
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
              Agregar Contorno
            </button>
            </div>
      </>
  
    )} />
  );
}

export default FormularioContorno