import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

function FormularioVenta({ initialData, isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        idCliente: "",
        cliente: "",
        tipo: "",
        precio: ""
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ idCliente: "", cliente: "", tipo: "", precio: "" });
        }
    }, [initialData, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="overlay activo" onClick={onClose}>
            <div className="formulario-venta" onClick={(e) => e.stopPropagation()}>
                <button className="boton-cerrar" onClick={onClose}>
                    <X size={20} />
                </button>
                <h2 className="formulario-titulo">
                    {initialData ? "Modificar Venta" : "Añadir Venta"}
                </h2>
                <form onSubmit={handleSubmit} className="formulario-contenido">
                    <div className="formulario-campo">
                        <label className="formulario-etiqueta">ID Cliente</label>
                        <input
                            type="text"
                            name="idCliente"
                            value={formData.idCliente}
                            onChange={handleChange}
                            className="formulario-input"
                        />
                    </div>
                    <div className="formulario-campo">
                        <label className="formulario-etiqueta">Cliente</label>
                        <input
                            type="text"
                            name="cliente"
                            value={formData.cliente}
                            onChange={handleChange}
                            className="formulario-input"
                        />
                    </div>
                    <div className="formulario-campo">
                        <label className="formulario-etiqueta">Tipo</label>
                        <input
                            type="text"
                            name="tipo"
                            value={formData.tipo}
                            onChange={handleChange}
                            className="formulario-input"
                        />
                    </div>
                    <div className="formulario-campo">
                        <label className="formulario-etiqueta">Precio</label>
                        <input
                            type="number"
                            name="precio"
                            value={formData.precio}
                            onChange={handleChange}
                            className="formulario-input"
                        />
                    </div>
                    <button type="submit" className="formulario-boton">
                        {initialData ? "Guardar Cambios" : "Añadir Venta"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormularioVenta;