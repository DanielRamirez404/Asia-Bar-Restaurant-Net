import React, { useEffect, useState } from "react";
import Dashboard from "../reusables/dashboard-page";
import "./widgetsInicioCss/Mesa.css"
import "./widgetsInicioCss/RecienAgregado.css"
import "./widgetsInicioCss/MasVendidos.css"
import "./widgetsInicioCss/PedidoTicket.css"

import { Info } from "lucide-react";



export function Mesa({nombre}){

   const [estado,setEstado] = useState("desocupada");
   const [temporizador,setTemporizador] = useState(0);
   const [mostrarOpciones, setMostrarOpciones] = useState(false);


   const formatearTimer = (totalSegundos) => {
      const horas = Math.floor(totalSegundos/3600);
      const minutos = Math.floor((totalSegundos%3600)/60);
      const segundos = totalSegundos%60;
      return  `${horas.toString().padStart(2,"0")}:${minutos.toString().padStart(2,"0")}:${segundos.toString().padStart(2,"0")}`;
   };

   
   useEffect(()=>{
      let intervalo;
      if (estado === "ordenada"){
         intervalo = setInterval(()=>{
            setTemporizador((prev)=> prev +1);
         },1000);
      } else {
         setTemporizador(0);
      }
      return () => clearInterval(intervalo);


   }, [estado]);

   const clickMesa = () =>{
      console.log("mesa clickeada, estado:",estado);
      console.log("antes de cambiar a mostrar opciones:",mostrarOpciones);
      setMostrarOpciones(!mostrarOpciones);
      console.log("despues de mostra opciones", !mostrarOpciones);
   };
   const cambiarEstado = (nuevoEstado) => {
      setEstado(nuevoEstado);
      setMostrarOpciones(false);
   };
   
   


   return (

   <div className={`widgetMesa ${estado}`} onClick={clickMesa}>
      
      <p className="nombreMesa">{nombre}</p>
      {estado === "ordenada" && <p className="timer">🕐 {formatearTimer(temporizador)} </p>}


      {mostrarOpciones && (

         <div className="menuOpciones">
            {estado === "desocupada" && (
               <button className="opcionMesa" onClick={() => cambiarEstado("ocupada")}>ocupada</button>
            )}
            {estado === "ocupada" &&(
               <>
                  <button className="opcionMesa" onClick={()=> cambiarEstado("desocupada")}>Desocupar</button>
                  <button className="opcionMesa" onClick={()=> cambiarEstado("ordenada")}>Ordenar</button>
               </>
            )}
            {estado === "ordenada" && (
               <>
                  <button className="opcionMesa" onClick={()=> cambiarEstado("ocupada")}>Orden completa</button>
                  <button className="opcionMesa" onClick={()=> cambiarEstado("desocupada")}>Desocupar</button>
               </>
            )}

         </div>


      )}



    </div>
   )

}

export function RecienAgregado({nombre, precio, categoria}){

   return(

      <div className="mainRecienAgregado">

         <div className="informacionRecienAgregado">
            <h3 className="tituloRecienAgregado">{nombre}</h3>
            <span className="precioRecienAgregado">precio: <span className="precioRecienAgregadoTexto">{precio}$</span></span>
            <span className="categoriaRecienAgregado">{categoria}</span>
         </div>
         <button className="btnInformacionRecienAgregado"><Info size={30} /></button>

      </div>

   )

}


export function MasVendidos({top, nombre, srcImg, precio, totalVentas}){

      if (!srcImg){
         srcImg = "https://static.vecteezy.com/system/resources/thumbnails/018/128/189/small/schezwan-noodles-or-szechuan-vegetable-png.png" 
      }
         
   return(

      <div className={`mainMasVendidos ${top}`}>
         <span className="masVendidoCoronaIcono">👑</span>
         <img className="imgenMasVendido" src={srcImg}></img>
         <span className="nombreMasVendido">{nombre}</span>
         <span className="precioMasVendido">{precio}$</span>
         <span className="totalDeVentas">total de ventas: {totalVentas}</span>
         <button className="btnInformacionMasVendidos"><Info size={20} /></button>
         


      </div>


   )


}

export function PedidoTicket({numeroPedido, nombreCompletoComprador, totalProductos, tipoDePedido, totalTicket}){

   return (

      <div className="mainPedidoTicket">

         <div className="informacionPedidoTicket">
            <h3 className="numeroDePedido">Pedido Nro: {numeroPedido}</h3>
            <span className="NombreComprador">{nombreCompletoComprador}</span>
            <span className="totalProductosTicket">cantidad productos: x{totalProductos}</span>
            <span className="tipoDePedidoTicket">Tipo de pedido: {tipoDePedido}</span>
         </div>

         <span className="totalTicket">{totalTicket}$</span>

         <div className="contenedorBtnPedidoTicket">
            <button className="botonInformacionTicket"><Info size={20} /></button>
            
         </div>
      </div>

   )

}