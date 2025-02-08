import React, { useState } from "react";
import { X } from "lucide-react";
import "./formulario_prod.css";

function FormularioProducto() {
  const [formData, setFormData] = useState({
    producto: "",
    descripcion: "",
    cantidad: "",
    precio: "",
    proveedor: "",
    categoria: "",
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
    console.log(formData);
    // Aquí puedes agregar la lógica para enviar los datos
  };

  return (
    <div className="form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Añadir Producto</h2>

        <div className="form-field">
          <input
            type="text"
            name="producto"
            value={formData.producto}
            onChange={handleChange}
            placeholder="Producto"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            className="form-input"
          ></textarea>
        </div>

        <div className="form-field">
          <input
            type="number"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            placeholder="Cantidad"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            placeholder="Precio"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="proveedor"
            value={formData.proveedor}
            onChange={handleChange}
            placeholder="Proveedor"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            placeholder="Categoría"
            className="form-input"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-cancel">
            <X size={20} />
            Cancelar
          </button>
          <button type="submit" className="btn-submit">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioProducto;