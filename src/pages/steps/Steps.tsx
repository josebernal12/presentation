import { Link } from "react-router-dom"
import Nav from "../principal/components/Nav"
import Button from "../../components/ui/button"

const Steps = () => {
    return (
        <>
            <Nav />
            <Button asChild className=" p-2  flex gap-3 hover:scale-105 transition-all font-bold m-5 w-32">
            <Link to={'/roles'} className="flex gap-2 items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
                Regresar
            </Link>
            </Button>
            <div className="container pt-5 mx-auto text-indigo-700">
                <p className="mb-5">Pasos para generar una venta:</p>
                <div>
                    <p className="mb-2">Paso numero 1: Creacion de Ticket</p>
                    <video src="./menu2.mp4" controls ></video>
                </div>
                <div>
                    <p className="mb-2">Paso numero 2:  Cuando el Cocinero tenga la orden Completar la orden</p>
                    <video src="./cocina.mp4" controls ></video>
                </div>
                <div>
                    <p className="mb-2">Paso numero 3:  Cuando la orden este lista hacer lo siguiente:</p>
                    <video src="./vendedor.mp4" controls ></video>
                </div>
                <div>
                    <p className="mb-2">Paso numero 4:  Pago de ticket</p>
                    <video src="./ticket.mp4" controls ></video>
                </div>
            </div>
            <img src="./whatsapp.png" alt="imagen whatsapp" style={{ position: 'fixed', bottom: '40px', right: '40px', width: '70px' }} className="hover:scale-110 hover:cursor-pointer transition-all" />

        </>
    )
}

export default Steps