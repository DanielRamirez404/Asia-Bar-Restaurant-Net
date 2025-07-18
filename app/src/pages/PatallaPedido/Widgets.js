import React, { useState } from "react";
import "./Widgets.css"

export function Producto({ nombre = "Nombre del producto", precio = 20, onAgregar }){
    const handleAgregar = () => {
        if (onAgregar) {
            onAgregar({ nombre, precio });
        }
    };

    return (
        <div className="frameProducto">
            <div className="productoInformacion">
                <div className = "descripcion">
                    <p id="productoNombre">{nombre}</p>
                    <p id="productoPrecio">{precio}$</p>
                    <p id="prductoDisponiblidad">Disponible</p>
                </div>
            </div>
            <button id="btnAgregarPoducto" onClick={handleAgregar}>
                +
            </button>
        </div>
    )
}

export function Pedido({ id, nombre, precio, cantidad = 1, onCantidadChange, onEliminar }) {
    const [isEditing, setIsEditing] = useState(false);
    const [displayValue, setDisplayValue] = useState(`${cantidad}x`);

    const handleSumar = () => {
        const newCantidad = cantidad + 1;
        onCantidadChange && onCantidadChange(id, newCantidad);
        setDisplayValue(`${newCantidad}x`);
    };

    const handleRestar = () => {
        if (cantidad > 1) {
            const newCantidad = cantidad - 1;
            onCantidadChange && onCantidadChange(id, newCantidad);
            setDisplayValue(`${newCantidad}x`);
        } else {
            onEliminar && onEliminar(id);
        }
    };

    const handleFocus = () => {
        setIsEditing(true);
        setDisplayValue(cantidad.toString());
    };

    const handleBlur = () => {
        setIsEditing(false);
        let newCantidad = cantidad;
        
        if (displayValue === '') {
            newCantidad = 1;
        } else {
            const num = parseInt(displayValue, 10);
            newCantidad = isNaN(num) || num < 1 ? 1 : num;
        }
        
        onCantidadChange && onCantidadChange(id, newCantidad);
        setDisplayValue(`${newCantidad}x`);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^[1-9]\d*$/.test(value)) {
            setDisplayValue(value);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    return (
        <div className="framePedidoWidget">
            <button 
                className="btnSumarRestar" 
                id="btnRestarProducto"
                onClick={handleRestar}
            >
                -
            </button>

            <p className="pedidoNombre">{nombre}</p>
            
            <div className="pedidoCantidad" 
                 onClick={() => document.getElementById(`cantidadInput-${id}`)?.focus()}
                 style={{cursor: 'text', userSelect: 'none'}}>
                {isEditing ? (
                    <input
                        id={`cantidadInput-${id}`}
                        type="text"
                        value={displayValue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        style={{
                            width: '20px',
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            textAlign: 'center',
                            padding: 0,
                            margin: 0
                        }}
                    />
                ) : (
                    <span onClick={(e) => {
                        e.stopPropagation();
                        handleFocus();
                    }}>
                        {displayValue}
                    </span>
                )}
            </div>

            <div className="pedidoTotal">
                <p className="pedidoTotalTexto">{cantidad * precio}$</p>
            </div>

            <button 
                className="btnSumarRestar" 
                id="btnSumarProducto"
                onClick={handleSumar}
            >
                +
            </button>
        </div>
    );
}

export function WidgetNota(){
    return (
        <div className="mainNotaWidget">
            <div className="frameTituloNota">
                <p className="notaTitulo">Nota</p>
                <button id="btneliminarNota">
                    x
                </button>
            </div>
            <p className="notaContenido">*La nota deberia tener un maximo de caracteres 1232 13123213213213  </p>
        </div>
    )
}
