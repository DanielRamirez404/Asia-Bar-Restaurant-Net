import './informacionDeVenta.css'
import Dashboard from "../reusables/dashboard-page";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function ContenidoInformacionVenta(){
    
    const [Seleccion, setSeleccion] = useState("");

    const navegar = useNavigate();

    return(

        <div className="mainInformacionDeVenta">
            
            <h1 id="tituloInformacionDeVenta">Informacion de Venta</h1>
            <form id='formularioInformacionDeVenta'>
                <div className='frameInputInformacionVenta' id="informacionComprador">

                    <h2 className='tituloFormVenta'>Informacion del Comprador</h2>

                    <label className='tituloInputVenta' htmlFor='inputCIComprador'>Cedula de identidad</label>
                    <input className="inputInformacionVenta" id='inputCIComprador' placeholder='44000111' type='text' required></input>    


                   

                

                <h2 className='tituloFormVenta'>Informacion de la Venta</h2>
                    <label className='tituloInputVenta' htmlFor='tipoDePedido'>Tipo de pedido</label>

                    <select className="inputInformacionVenta" id='tipoDePedido' value={Seleccion} onChange={(e)=> setSeleccion(e.target.value)}>
                        <option value="">Seleccione una opcion</option>
                        <option value="comerAqui" id='paraComerAqui'>Para comer aqui</option>
                        <option value="Llevar" id='paraLLevar'>Para llevar</option>
                        <option value="delivery" id='delivery'>Delivery a domicilio</option>

                    </select>

                    
                    <div  className={`informacionExtra ${Seleccion === "delivery" ? "informacionVisible":""}`} id="informacionVentaDelivery">

                


                    <label className='tituloInputVenta' htmlFor='inputDireccionEntrega'>Direccion de entrega</label>
                    <input className="inputInformacionVenta" id='inputDireccionEntregar' placeholder='Direccion*' type='text'></input>   

                    <label className='tituloInputVenta' htmlFor='inputRepartidor' >Repartidor</label>
                    

                    <select className="inputInformacionVenta" id='inputRepartidor' >
                    
                        <option>Ramon Martinez ci: 11534366</option>
                        <option> Pepito Perez ci: 327549348</option>
                        
                        
                    </select>

                    



                    </div>

                    <div className={`informacionExtra ${Seleccion === "comerAqui" ? "informacionVisible":""}`} id="informacionVentaLocal">

                        

                    <label className='tituloInputVenta' htmlFor='inputMesa'>Mesa</label>
                    <select className="inputInformacionVenta" id='inputMesa'  type='text'>
                        
                        <option>Mesa 1</option>
                        <option>Mesa 2</option>
                        <option>Mesa 3</option>
                        <option>Mesa 4</option>
                        <option>Mesa 5</option>
                        <option>Mesa 6</option>
                        <option>Mesa 7</option>
                        <option>Mesa 8</option>
                        <option>Mesa 9</option>
                        <option>Mesa 10</option>
                        
                    </select>   



                    </div>


                

                </div>

                

            
                <div className="frameBotones">

                
                    <button id="btnCancelar" className="btnPedido">Cancelar</button>
                    <button id="btnContinuar" className="btnPedido" onClick={() => navegar("/Pedido")}>Continuar</button>


                </div>
            </form>

        </div>



    )










}

const InformacionVenta = () => {
    return (
        <Dashboard content={ <ContenidoInformacionVenta/> } />
    );
}


export default InformacionVenta