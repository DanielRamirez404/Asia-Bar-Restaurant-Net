import React, { useState, useEffect, useRef } from "react";
import { Info, Search, X } from "lucide-react";
import "./tabla-ventas.css";
import DashboardPage from "./reusables/dashboard-page";

const campos = ["ID", "ID Cliente", "Cliente", "Tipo", "Precio", "Info"];

const ventasIniciales = [
	{ id: 1, idCliente: "V-2765293", cliente: "Ramon", tipo: "Delivery", precio: 20 },
	{ id: 2, idCliente: "J-9782659838-2", cliente: "Empresa polar", tipo: "Local", precio: 76 },
	{ id: 3, idCliente: "V-2765293", cliente: "Maître Gims", tipo: "Local", precio: 12 },
	{ id: 4, idCliente: "V-2765293", cliente: "Maluma", tipo: "Delivery", precio: 15 },
	

];

const columnNames = Object.keys(ventasIniciales[0]);
const data = ventasIniciales.map(item => columnNames.map(col => item[col]));

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

function Header({ fields }) {
    return(
        <thead className="encabezado-tabla">
		    <tr>{ fields.map((field) => (<th>{field}</th>)) }</tr>
		</thead>
    );
}

function Body({ data, registroSeleccionado, handleSeleccionarRegistro }) {
    return (
        <tbody className="cuerpo-tabla">
            {data.map((row, index) => (
                <tr
                    key={ index }
                    className={ registroSeleccionado?.id === index ? "registro-seleccionado" : ""}
                    onClick={() => handleSeleccionarRegistro(row) }
                >

                    { row.map((field) => ( <td>{ field }</td> )) }

                    <td>
                        <ModalVenta datos={data} />
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

function Table({ fields, data, registroSeleccionado, handleSeleccionarRegistro }) {
    return(
        <table className="tabla-ventas">
            <Header fields={ fields } />
            <Body data={ data } registroSeleccionado={ registroSeleccionado } handleSeleccionarRegistro={ handleSeleccionarRegistro } />
		</table>
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
		<DashboardPage content={
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
					<Table fields={ campos } data={ data } registroSeleccionado={ registroSeleccionado } handleSeleccionarRegistro={ handleSeleccionarRegistro } />
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