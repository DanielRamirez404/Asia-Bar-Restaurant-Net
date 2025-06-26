import React from "react";
import "./Widgets.css"



export function Producto(){


    return (

        <div className="frameProducto">

            <div className="productoInformacion">

                


                <div className = "descripcion">
                    <p id="productoNombre">Nombre del producto</p>
                    <p id="productoPrecio">20$</p>
                    <p id="prductoDisponiblidad"> Disponible</p>

                    
                </div>
            </div>

            <button id="btnAgregarPoducto">
                +
            </button>

        </div>

    )


}

export function Pedido(){

    return (

        <div className="framePedidoWidget">

            <button className="btnSumarRestar" id="btnRestarProducto">

                -

            </button>

            <p className="pedidoNombre">Nombre de123123123213l producto</p>
            <p className="pedidoCantidad">3x</p>
            <div className="pedidoTotal"><p className="pedidoTotalTexto">60$</p></div>


            <button className="btnSumarRestar" id="btnSumarProducto">

                +

            </button>

        </div>

    )

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
