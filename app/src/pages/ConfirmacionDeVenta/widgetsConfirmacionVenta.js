
import React from "react";

import './widgetsConfirmacionVenta.css'


export function TarjetaProductoInformacionVenta (){


    return(

        <div className="mainTarjetaInformacion">

            <span className="tituloTarjeta">Nombre Producto</span>
            <span className="cantidadProductoTarjeta">Cantidad: <span className="cantidadProductoTarjeta" id="numeroTotalProducto">4</span> </span>

            <div className="precioTotalProducto">

                <span className="precioTotalLabel">Total: </span>
                <span className="precioTotalProductoTexto">20$</span>


            </div>

        </div>


    )


};

export function TarjetaNota (){

    return (
    
    <div className="mainTarjetaInformacion">

        <span className="tituloTarjeta">Nota</span>
        
        <span className="contenidoTarjetaNota">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem consequatur modi iste officia! Officia consequatur explicabo iusto saepe ex.</span>




    </div>

    )

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