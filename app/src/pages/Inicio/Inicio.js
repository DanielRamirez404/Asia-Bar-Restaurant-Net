import react from "react";
import Dashboard from "../reusables/dashboard-page";
import "./Inicio.css"


import { Mesa, RecienAgregado, MasVendidos, PedidoTicket } from "./widgetsInicio";

function Inicio(){


    return (
    
    
    <div className="mainInicio">

     
    

       


                <div className="frameResumenes">

                    <div className="frameResumen" id="productosMasVendidos">
                        <h3>Mas Vendidos</h3>
                        <div className="scrollframeMasVendidos">

                            <MasVendidos nombre={"Nombre Producto 2"} precio={20} totalVentas={200}/>
                            <MasVendidos nombre={"Nombre Producto 1"} precio={20} totalVentas={250} top={"top1"}/>
                            <MasVendidos nombre={"Nombre Producto 3"} precio={20} totalVentas={120}/>
                                
                        </div>

                    </div>


                    <div className="frameResumen" id="productosRecienAgregados">
                        <h3>Recien Agregados</h3>
                        <div className="scrollFrameRecienAgregado">
                            <RecienAgregado nombre={"Nombre Producto"} precio={3.50} categoria="refresco"/>
                            <RecienAgregado nombre={"Nombre Producto"} precio={3.50} categoria="refresco"/>
                            <RecienAgregado nombre={"Nombre Producto"} precio={3.50} categoria="refresco"/>
                            <RecienAgregado nombre={"Nombre Producto"} precio={3.50} categoria="refresco"/>
                            <RecienAgregado nombre={"Nombre Producto"} precio={3.50} categoria="refresco"/>
                            <RecienAgregado nombre={"Nombre Producto"} precio={3.50} categoria="refresco"/>
                            <RecienAgregado nombre={"Nombre Producto"} precio={3.50} categoria="refresco"/>

                        </div>


                    </div>

                   

                </div>
            <div className="frameMesas">
                <h2 className="tituloMesas">Mesas</h2>
                <div className="scrollFrameMesas">

                    <Mesa nombre={"mesa 1"}/>
                    <Mesa nombre={"mesa 2"}/>
                    <Mesa nombre={"mesa 3"}/>
                    <Mesa nombre={"mesa 4"}/>
                    <Mesa nombre={"mesa 5"}/>
                    <Mesa nombre={"mesa 6"}/>
                    <Mesa nombre={"mesa 7"}/>
                    <Mesa nombre={"mesa 8"}/>
                    <Mesa nombre={"mesa 9"}/>
                    <Mesa nombre={"mesa 10"}/>
                    <Mesa nombre={"mesa 11"}/>
                    <Mesa nombre={"mesa 12"}/>
                    <Mesa nombre={"mesa 13"}/>
                    <Mesa nombre={"mesa 14"}/>
                    <Mesa nombre={"mesa 15"}/>
                    <Mesa nombre={"mesa 16"}/>
                    <Mesa nombre={"mesa 17"}/>
                    <Mesa nombre={"mesa 18"}/>
                    <Mesa nombre={"mesa 19"}/>
                    <Mesa nombre={"mesa 20"}/>
                    <Mesa nombre={"mesa 21"}/>
                    <Mesa nombre={"mesa 22"}/>
                    <Mesa nombre={"mesa 23"}/>
                    <Mesa nombre={"mesa 24"}/>
                    <Mesa nombre={"mesa 25"}/>
                    <Mesa nombre={"mesa 26"}/>
                    <Mesa nombre={"mesa 27"}/>
                    <Mesa nombre={"mesa 28"}/>
                    <Mesa nombre={"mesa 29"}/>
                    <Mesa nombre={"mesa 30"}/>
                    <Mesa nombre={"mesa 31"}/>
                    <Mesa nombre={"mesa 32"}/>
                    <Mesa nombre={"mesa 33"}/>
                    <Mesa nombre={"mesa 34"}/>
                    <Mesa nombre={"mesa 35"}/>
                    <Mesa nombre={"mesa 36"}/>
                    <Mesa nombre={"mesa 37"}/>
                    <Mesa nombre={"mesa 38"}/>
                    <Mesa nombre={"mesa 39"}/>
                    <Mesa nombre={"mesa 40"}/>
                    <Mesa nombre={"mesa 41"}/>
                    <Mesa nombre={"mesa 42"}/>
                    <Mesa nombre={"mesa 43"}/>
                    <Mesa nombre={"mesa 44"}/>
                    <Mesa nombre={"mesa 45"}/>
                    <Mesa nombre={"mesa 46"}/>
                    <Mesa nombre={"mesa 47"}/>
                    <Mesa nombre={"mesa 48"}/>
                    <Mesa nombre={"mesa 49"}/>
                    <Mesa nombre={"mesa 50"}/>
                    



                </div>
            </div>


            






        <div className="FramePedidos">
            <h2>Pedidos</h2>
            <div className="scrollframePedidos">
                <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3}  totalTicket={65} tipoDePedido={"Delivery"}/>
                <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3}  totalTicket={65} tipoDePedido={"Delivery"}/>
                <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3}  totalTicket={65} tipoDePedido={"Delivery"}/>
                <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3}  totalTicket={65} tipoDePedido={"Delivery"}/>
                <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3}  totalTicket={65} tipoDePedido={"Delivery"}/>
                <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3}  totalTicket={65} tipoDePedido={"Delivery"}/>
                <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3}  totalTicket={65} tipoDePedido={"Delivery"}/>
                <PedidoTicket numeroPedido={1} nombreCompletoComprador={"Nombre Apellido"} totalProductos={3}  totalTicket={65} tipoDePedido={"Delivery"}/>

            </div>
            
          

        </div>







    </div>
    


)

}


const Home = () => {
    return (
        <Dashboard content={ <Inicio/> } />
    );
}

export default Home;