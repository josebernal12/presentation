import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 border-gray-200 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logonew.avif" className="h-8" alt="theMenu Logo" />

          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            The Menu
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border text-white border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0  hover:border-b-2 hover:border-yellow-500 "
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to={"/roles"}
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0  text-white hover:border-b-2 hover:border-yellow-500 "
              >
                Roles
              </Link>
            </li>
            <li>
              <Link
                to={"/steps"}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:border-b-2 hover:border-yellow-500    md:p-0 "
              >
                Pasos Para Generar una Venta
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:border-b-2 hover:border-yellow-500    md:p-0"
              >
                Acerca de Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
