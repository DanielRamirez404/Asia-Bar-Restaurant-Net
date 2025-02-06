import React, { useState, useEffect, useRef } from "react";
import { Info, Search, X } from "lucide-react";
import "./tabla-ventas.css";
import Dashboard from "./reusables/dashboard-page.js";

const ventasIniciales = [
  { id: 1, idCliente: "V-2765293", cliente: "Ramon", tipo: "Delivery", precio: 20 },
  { id: 2, idCliente: "J-9782659838-2", cliente: "Empresa polar", tipo: "Local", precio: 76 },
  { id: 3, idCliente: "V-2765293", cliente: "Prince roy", tipo: "Local", precio: 12 },
  { id: 4, idCliente: "V-2765293", cliente: "Mia khalifa", tipo: "Delivery", precio: 15 },
];

function ModalVenta({ datos }) {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const abrirModal = () => {
    setEstaAbierto(true);
  };

  const cerrarModal = () => {
    setEstaAbierto(false);
  };

  return (
    <>
      <button onClick={abrirModal} className="boton-info">
        <Info size={20} />
      </button>

      {estaAbierto && (
        <div
          className={`overlay ${estaAbierto ? "activo" : ""}`}
          onClick={(e) => {
            if (typeof e.target.className === 'string' && e.target.className.includes("overlay")) {
              cerrarModal();
            }
          }}
        >
          <div className="modal">
            <button className="boton-cerrar" onClick={cerrarModal}>
              <X size={20} />
            </button>
            <h2 className="modal-titulo">Información de venta</h2>
            <div className="modal-contenido">
              <div className="modal-campo">
                <span className="modal-etiqueta">N de Pedido</span>
                <span className="modal-valor">{datos.id}</span>
              </div>
              <div className="modal-campo">
                <span className="modal-etiqueta">Cédula</span>
                <span className="modal-valor">{datos.idCliente}</span>
              </div>
              <div className="modal-campo">
                <span className="modal-etiqueta">Cliente</span>
                <span className="modal-valor">{datos.cliente}</span>
              </div>
              <div className="modal-campo">
                <span className="modal-etiqueta">Tipo</span>
                <span className="modal-valor">{datos.tipo}</span>
              </div>
              <div className="modal-campo">
                <span className="modal-etiqueta">Precio</span>
                <span className="modal-valor">{datos.precio}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FormularioModificacion({ datos, estaAbierto, cerrarFormulario, guardarCambios }) {
  const [formData, setFormData] = useState(datos);

  useEffect(() => {
    setFormData(datos);
  }, [datos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarCambios(formData);
    cerrarFormulario();
  };

  if (!estaAbierto) return null;

  return (
    <div className="overlay activo" onClick={cerrarFormulario}>
      <div className="formulario-modificacion" onClick={(e) => e.stopPropagation()}>
        <button className="boton-cerrar" onClick={cerrarFormulario}>
          <X size={20} />
        </button>
        <h2 className="formulario-titulo">Modificar Información</h2>
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
          <button type="submit" className="formulario-boton">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}

function TablaVentas() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [ventas, setVentas] = useState(ventasIniciales);
  const [ventasFiltradas, setVentasFiltradas] = useState(ventas);
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null);
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const [mensajeAdvertenciaModificar, setMensajeAdvertenciaModificar] = useState("");
  const [mensajeAdvertenciaEliminar, setMensajeAdvertenciaEliminar] = useState("");
  const inputRef = useRef(null);

  const handleBuscar = () => {
    const filtradas = ventas.filter((venta) =>
      venta.cliente.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    setVentasFiltradas(filtradas);
  };

  useEffect(() => {
    if (ventasFiltradas.length === 0) {
      inputRef.current.focus();
    }
  }, [ventasFiltradas]);

  useEffect(() => {
    if (terminoBusqueda === "") {
      setVentasFiltradas(ventas);
    }
  }, [terminoBusqueda, ventas]);

  const handleEliminar = () => {
    setMensajeAdvertenciaModificar(""); // Limpiar mensaje de modificar
    if (registroSeleccionado) {
      const nuevasVentas = ventas.filter((venta) => venta.id !== registroSeleccionado.id);
      setVentas(nuevasVentas);
      setVentasFiltradas(nuevasVentas);
      setRegistroSeleccionado(null);
      setMensajeAdvertenciaEliminar("");
    } else {
      setMensajeAdvertenciaEliminar("Seleccione algún registro");
      setTimeout(() => {
        setMensajeAdvertenciaEliminar("");
      }, 1000);
    }
  };

  const handleModificar = () => {
    setMensajeAdvertenciaEliminar(""); // Limpiar mensaje de eliminar
    if (registroSeleccionado) {
      setFormularioAbierto(true);
      setMensajeAdvertenciaModificar("");
    } else {
      setMensajeAdvertenciaModificar("Seleccione algún registro");
      setTimeout(() => {
        setMensajeAdvertenciaModificar("");
      }, 1000);
    }
  };

  const handleSeleccionarRegistro = (venta) => {
    setRegistroSeleccionado(venta);
    setMensajeAdvertenciaModificar("");
    setMensajeAdvertenciaEliminar("");
  };

  const cerrarFormulario = () => {
    setFormularioAbierto(false);
  };

  const guardarCambios = (datosActualizados) => {
    const nuevasVentas = ventas.map((venta) =>
      venta.id === datosActualizados.id ? datosActualizados : venta
    );
    setVentas(nuevasVentas);
    setVentasFiltradas(nuevasVentas);
  };

  const handleDeseleccionarRegistro = (e) => {
    if (registroSeleccionado && !e.target.closest('.contenedor-ventas')) {
      setRegistroSeleccionado(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDeseleccionarRegistro);
    return () => {
      document.removeEventListener('click', handleDeseleccionarRegistro);
    };
  }, [registroSeleccionado]);

  return (
    <Dashboard content={
      <div className="contenedor-ventas">
        <div className="encabezado-ventas">
          <h1 className="titulo-ventas">Registro de ventas</h1>
          <div className="contenedor-busqueda">
            <Search className="icono-busqueda" />
            <input
              type="text"
              className="entrada-busqueda"
              placeholder="Buscar por cliente"
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
              ref={inputRef}
            />
            <button onClick={handleBuscar} className="boton-buscar">Buscar</button>
          </div>
        </div>
        <div className="contenedor-tabla">
          <div className="envoltorio-tabla">
            <table className="tabla-ventas">
              <thead className="encabezado-tabla">
                <tr>
                  <th>ID</th>
                  <th>ID Cliente</th>
                  <th>Cliente</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody className="cuerpo-tabla">
                {ventasFiltradas.length > 0 ? (
                  ventasFiltradas.map((venta) => (
                    <tr
                      key={venta.id}
                      className={registroSeleccionado?.id === venta.id ? "registro-seleccionado" : ""}
                      onClick={() => handleSeleccionarRegistro(venta)}
                    >
                      <td>{venta.id}</td>
                      <td>{venta.idCliente}</td>
                      <td>{venta.cliente}</td>
                      <td>
                        <span className={`etiqueta ${venta.tipo === "Delivery" ? "etiqueta-delivery" : "etiqueta-local"}`}>
                          {venta.tipo}
                        </span>
                      </td>
                      <td>{venta.precio}</td>
                      <td>
                        <ModalVenta datos={venta} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="celda-tabla">No se encuentra cliente o identificación con dichas especificaciones</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="contenedor-botones">
          <div className="contenedor-boton-eliminar">
            <button onClick={handleEliminar} className="boton-eliminar">Eliminar</button>
            {mensajeAdvertenciaEliminar && <p className="mensaje-advertencia">{mensajeAdvertenciaEliminar}</p>}
          </div>
          <div className="contenedor-boton-modificar">
            <button onClick={handleModificar} className="boton-modificar">Modificar</button>
            {mensajeAdvertenciaModificar && <p className="mensaje-advertencia">{mensajeAdvertenciaModificar}</p>}
          </div>
        </div>
        <FormularioModificacion
          datos={registroSeleccionado}
          estaAbierto={formularioAbierto}
          cerrarFormulario={cerrarFormulario}
          guardarCambios={guardarCambios}
        />
      </div>
    } />
  );
}

export default TablaVentas;