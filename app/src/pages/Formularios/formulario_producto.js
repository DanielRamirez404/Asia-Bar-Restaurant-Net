"use client"

import { useState } from "react"
import { Package2, Hash, DollarSign, Tags, Info } from "lucide-react"
import "./formulario.css"

function FormularioProducto({ onClose = () => {} }) {
  const [formData, setFormData] = useState({
    nombre: "",
    categoria: "",
    cantidad: "",
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
    console.log("Datos del formulario:", formData)
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
          <h1>Nuevo Producto</h1>

          <div className="campo-grupo">
            <Package2 className="campo-icono" />
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
            <Hash className="campo-icono" />
            <input
              type="number"
              name="cantidad"
              placeholder="Cantidad"
              value={formData.cantidad}
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
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormularioProducto