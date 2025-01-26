import React from "react";
import "../reusables/colors.css"
import "./Widgets.css"



export function Producto(){


    return (

        <div className="frameProducto">

            <img className="imgComida" src="https://static.vecteezy.com/system/resources/thumbnails/018/128/189/small/schezwan-noodles-or-szechuan-vegetable-png.png"></img>


            <div className = "descripcion">
                <p id="productoTitulo">Titulo</p>
                <p id="productoPrecio">Precio: 20$</p>
                <p id="prductoDisponiblidad">Disponibilidad : Dispobible</p>
            </div>

            <button className="btnAgregarPoducto">
                +
            </button>

        </div>

    )


}