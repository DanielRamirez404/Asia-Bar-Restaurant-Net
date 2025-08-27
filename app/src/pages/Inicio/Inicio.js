import react, { useState } from "react";
import DashboardPage from "../../components/layout/dashboard-page.js";
import "./Inicio.css"
import { ModalInformacionDelProducto, ModalInicio, InformacionDelProductoModal } from "./modalesInicio";

import { Mesa, RecienAgregado, MasVendidos, PedidoTicket } from "./widgetsInicio";



function Inicio(){

   
    //Funcion para cargar el modal, la primea constante define si el modal esta visible o no y la segunda es el contenido del modal
    const [ModalAbierto, setModalAbierto] = useState(false);
    const [modalContenido, setModalContenido] = useState("");

    const onOpen = (modalContenido) => {

        setModalContenido(modalContenido);
        setModalAbierto(true);

    };


    return (
    
    
    <div className="mainInicio">

     
    

        {ModalAbierto && <ModalInicio contenido={modalContenido} onClose={()=> setModalAbierto(false)}/>}


                <div className="frameResumenes">
                    <div className="frameResumen" id="pedidos">
                        <h3 className="tituloResumen">Pedidos</h3>
                        <div className="scrollframePedidos">
                            <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3} totalTicket={65} tipoDePedido={"Delivery"} onOpen={onOpen}/>
                            <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3} totalTicket={65} tipoDePedido={"Delivery"} onOpen={onOpen}/>
                            <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3} totalTicket={65} tipoDePedido={"Delivery"} onOpen={onOpen}/>
                            <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3} totalTicket={65} tipoDePedido={"Delivery"} onOpen={onOpen}/>
                            <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3} totalTicket={65} tipoDePedido={"Delivery"} onOpen={onOpen}/>
                            <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3} totalTicket={65} tipoDePedido={"Delivery"} onOpen={onOpen}/>
                            <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3} totalTicket={65} tipoDePedido={"Delivery"} onOpen={onOpen}/>
                            <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3} totalTicket={65} tipoDePedido={"Delivery"} onOpen={onOpen}/>

                        </div>
                    </div>
                </div>

                <div className="frameMesas">
                    <h2 className="tituloMesas">Mesas</h2>
                    <div className="scrollFrameMesas">

                       
                        <Mesa nombre={"mesa 1"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 2"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 3"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 4"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 5"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 6"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 7"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 8"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 9"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 10"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 11"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 12"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 13"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 14"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 15"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 16"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 17"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 18"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 19"} onOpen={onOpen}/>
                        <Mesa nombre={"mesa 20"} onOpen={onOpen}/>
                           
                    



                    </div>
                </div>

                <div className="FramePedidos">
                    <h2>Más Vendidos</h2>
                    <div className="scrollframeMasVendidos">
                        <MasVendidos nombre={"Nombre Producto 2"} precio={20} totalVentas={200} onOpen={onOpen}/>
                        <MasVendidos nombre={"Nombre Producto 1"} precio={20} totalVentas={250} top={"top1"} onOpen={onOpen}/>
                        <MasVendidos nombre={"Nombre Producto 3"} precio={20} totalVentas={120} onOpen={onOpen}/>
                    </div>
                </div>
            </div>
    


)

}


const Home = () => {
    return (
        <DashboardPage> 
            <Inicio/> 
        </DashboardPage>
    );
}

export default Home;
