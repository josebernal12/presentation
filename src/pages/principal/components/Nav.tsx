import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header className="bg-gray-900 p-7 ">
    <div className="container mx-auto flex flex-col items-center md:flex-row  md:justify-between">
        <h1 className="text-2xl">FastServ</h1>
        <nav className="flex flex-col items-center md:flex-row gap-3">
            <Link className="hover:border-b-2 hover:border-yellow-500 " to={'/'}>Inicio</Link>
            <Link className="hover:border-b-2 hover:border-yellow-500 " to={'/roles'}>Roles</Link>
            <Link className="hover:border-b-2 hover:border-yellow-500 " to={'/steps'}>Pasos Para Generar una Venta</Link>
            <Link className="hover:border-b-2 hover:border-yellow-500 " to={'#'}>Acerca de Nosotros</Link>
        </nav>
    </div>
</header>
  )
}

export default Nav