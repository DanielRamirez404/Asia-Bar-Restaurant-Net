import React, { useState } from 'react';
import Dashboard from "../reusables/dashboard-page";
import './confirmacionVenta.css'

import { TarjetaProductoInformacionVenta, TarjetaNota, TarjetaDelivery } from './widgetsConfirmacionVenta';



function ContenidoConfirmacionVenta (){

    const [tipoVenta, setTipoVenta] = useState('Delivery');
    
        

    return (
    
    <div className='mainConfirmacionVenta'>
        
        <h1 className='tituloConfirmacionVenta'>Confirmacion Venta</h1>
        
        <div className='contenedorResumenVenta'>

        <div className='frameResumenCliente' id='resumenCliente'>

            <div className='infromacionCliente'>
                    <span className='nombreApeliido'>Nombre Apellido</span>
                    <span className='datoCliente' id='ci'>CI: 23949235 </span>

                    {tipoVenta === 'Delivery' && (
                        <span className='datoCliente' id='informacionDireccion'>direccion: Calle XXXX casa nro XX</span>
                    )}

                    {tipoVenta === 'Para comer aqui' && (
                    <span className='datoCliente' id='informacionMesa'>Mesa: 7</span>
                    )}

                    
                        <span className='datoCliente' id='tipoDeVenta'>Tipo de venta: <span id='tipoTexto'>{tipoVenta}</span></span>
                   
                </div>

                {tipoVenta === 'Delivery' && (

                <div className='informacionRepartidor'>
                    <span className='repartidor'>Repartidor</span>
                    <span className='nombreRepartidor'>Nombre Apellido</span>
                </div>
                )}

        </div>



        <div className='frameResumenVenta' id='resumenVenta'>

            <div className='scrollResumenProductos'>

                <TarjetaProductoInformacionVenta/>
                <TarjetaProductoInformacionVenta/>
                <TarjetaProductoInformacionVenta/>
                <TarjetaProductoInformacionVenta/>
                <TarjetaProductoInformacionVenta/>
                <TarjetaProductoInformacionVenta/>
                <TarjetaDelivery/>

                <TarjetaNota/>


            </div>

            <div className='totalVenta'>

                <span className='totalTexto'>Total: 20$</span>

            </div>



        </div>



        </div>


        <div className="frameBotones">

                        
            <button id="btnCancelar" className="btnPedido">Cancelar</button>
            <button id="btnContinuar" className="btnPedido">Completar venta</button>


        </div>


    </div>
    
)

}


function ConfirmacionVenta(){

    return (<Dashboard content={ <ContenidoConfirmacionVenta/> } />)

}


export default ConfirmacionVenta