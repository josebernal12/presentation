import { Link } from "react-router-dom";
import Button from "./ui/button";

const Header = () => {
  return (
    <header className="container mx-auto p-20 flex flex-col">
      <h1 className="w-full mx-auto text-center  text-3xl text-indigo-700">
        Gestiona con Sabor: Tu Solución Integral para Pedidos de Restaurantes
      </h1>
      <div className="text-center flex justify-center mt-2 gap-5 ">
        <Button>Iniciar ahora mismo</Button>
        <Button variant="secondary" asChild>
          <Link to={"/steps"}>Pasos para generar una venta</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
