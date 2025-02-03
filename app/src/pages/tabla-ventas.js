import React, { useState } from "react";
import { Info, Search, X } from "lucide-react";
import "./tabla-ventas.css";

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

function TablaVentas() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [ventas] = useState(ventasIniciales);

  const ventasFiltradas = ventas.filter((venta) =>
    venta.cliente.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
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
          />
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
              {ventasFiltradas.map((venta) => (
                <tr key={venta.id}>
                  <td className="celda-tabla">{venta.id}</td>
                  <td className="celda-tabla">{venta.idCliente}</td>
                  <td className="celda-tabla">{venta.cliente}</td>
                  <td className="celda-tabla">
                    <span className={`etiqueta ${venta.tipo === "Delivery" ? "etiqueta-delivery" : "etiqueta-local"}`}>
                      {venta.tipo}
                    </span>
                  </td>
                  <td className="celda-tabla">{venta.precio}</td>
                  <td className="celda-tabla">
                    <ModalVenta datos={venta} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TablaVentas;