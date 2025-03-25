"use client"

import { useState } from "react"
import { User, MapPin, Info, Phone } from 'lucide-react'
import "./formulario.css"

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
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="formulario-container">
        <form onSubmit={handleSubmit}>
          <h1>Nuevo Repartidor</h1>

          <div className="campo-grupo">
            <User className="campo-icono" />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="campo-grupo">
            <MapPin className="campo-icono" />
            <input
              type="text"
              name="zona"
              placeholder="Zona"
              value={formData.zona}
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
            <Phone className="campo-icono" />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
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
              Agregar Repartidor
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormularioDelivery