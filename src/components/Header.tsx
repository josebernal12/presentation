import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="container mx-auto p-20 flex flex-col">
            <h1 className="w-full mx-auto text-center text-3xl">Gestiona con Sabor: Tu Solución Integral para Pedidos de Restaurantes</h1>
            <div className="text-center ">
                <button className="  mx-auto text-center bg-purple-400 my-10 p-2 rounded-md hover:bg-purple-500 sm:me-5 block sm:inline-block w-full sm:w-auto">Iniciar ahora mismo</button>
                <Link to={'/steps'} className="mx-auto text-center bg-blue-400 my-10 p-2 rounded-md hover:bg-blue-500 block sm:inline-block">Pasos para generar una venta</Link>
            </div>
        </header>
    )
}

export default Header