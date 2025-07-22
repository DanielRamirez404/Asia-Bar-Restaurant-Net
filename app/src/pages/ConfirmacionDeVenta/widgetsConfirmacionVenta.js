
import React from "react";

import './widgetsConfirmacionVenta.css'


export function TarjetaProductoInformacionVenta({ nombre, cantidad, precio }){


    return(

        <div className="mainTarjetaInformacion">

            <span className="tituloTarjeta">{nombre}</span>
            <span className="cantidadProductoTarjeta">
                Cantidad: <span className="cantidadProductoTarjeta" id="numeroTotalProducto">{cantidad}</span>
            </span>

            <div className="precioTotalProducto">

                <span className="precioTotalLabel">Total: </span>
                <span className="precioTotalProductoTexto">
                    ${(precio * cantidad).toFixed(2)}
                </span>


            </div>

        </div>


    )


};

export function TarjetaNota({ nota }){
    return (
        <div className="mainTarjetaInformacion">
            <span className="tituloTarjeta">Nota</span>
            <div className="contenidoTarjetaNota">
                {nota}
            </div>
        </div>
    );
};


export function TarjetaDelivery (){

    return (

        <div className="mainTarjetaInformacion">
            
            <span className="tituloTarjeta">Costo Delivery</span>

            

            <div className="precioTotalProducto">

                <span className="precioTotalLabel">Total: </span>
                <span className="precioTotalProductoTexto">5$</span>


            </div>


        </div>


    )




}