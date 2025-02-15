"use client"

import { useState } from "react"
import { Utensils, Tags, Info, DollarSign } from 'lucide-react'
import "./formulario.css"

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
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="formulario-container">
        <form onSubmit={handleSubmit}>
          <h1>Nuevo Contorno</h1>

          <div className="campo-grupo">
            <Utensils className="campo-icono" />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="campo-grupo">
            <Tags className="campo-icono" />
            <input
              type="text"
              name="categoria"
              placeholder="Categoría"
              value={formData.categoria}
              onChange={handleChange}
            />
          </div>

          <div className="campo-grupo">
            <Info className="campo-icono" />
            <input
              type="text"
              name="disponibilidad"
              placeholder="Disponibilidad"
              value={formData.disponibilidad}
              onChange={handleChange}
            />
          </div>

          <div className="campo-grupo">
            <DollarSign className="campo-icono" />
            <input
              type="number"
              name="precio"
              placeholder="Precio"
              value={formData.precio}
              onChange={handleChange}
            />
          </div>

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
        </form>
      </div>
    </div>
  )
}

export default FormularioContorno