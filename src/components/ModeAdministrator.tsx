import { Link } from "react-router-dom"

const ModeAdministrator = () => {
    return (
        <section className="container pt-10 ">
            <h3 id="modo-administrador" className="text-center mb-10 text-2xl ">Modo Administrador:</h3>
            <div data-aos="fade-left">
                <Link to={'/users'} className="grid md:grid-cols-2 gap-3 mb-16">
                    <div className="flex flex-col items-center justify-center bg-purple-500 rounded-md" >
                        <h3 className="text-center text-xl mb-2">Gestion de Usuarios</h3>
                        <p className="p-5">
                            En esta sección, podrás administrar todos los aspectos relacionados con los usuarios del sistema. Desde la creación y gestión de cuentas hasta la asignación de roles y permisos,
                            nuestra plataforma te ofrece un control completo sobre quién tiene acceso y qué acciones pueden realizar dentro del sistema.
                            Simplifica la gestión de usuarios y garantiza la seguridad de tus datos con nuestras herramientas intuitivas y personalizables
                        </p>
                    </div>
                    <img src="./usuarios.png" alt="usuarios" />
                </Link>
            </div>
            <Link to={'/inventary'} data-aos="fade-right" className="grid md:grid-cols-2 gap-3 mb-16">
                <img src="./inventario.png" alt="inventario" />
                <div className="flex flex-col items-center justify-center bg-blue-500 rounded-md" >
                    <h3 className="text-center text-xl mb-2">Gestión de Inventario</h3>
                    <p className="p-5">
                        La gestión de inventario es fundamental para el éxito de tu restaurante, y nuestra plataforma te brinda las herramientas necesarias para llevarla a cabo de manera eficiente.
                        Desde el seguimiento de existencias hasta la realización de pedidos y el control de costos, podrás supervisar cada aspecto de tu inventario con facilidad.
                        Optimiza tus operaciones, evita faltantes y maximiza la rentabilidad con nuestra completa suite de herramientas de gestión de inventario
                    </p>
                </div>
            </Link>
            <Link to={'/products'} data-aos="fade-left" className="grid md:grid-cols-2 gap-3 mb-16">
                <div className="flex flex-col items-center justify-center bg-purple-500 rounded-md" >
                    <h3 className="text-center text-xl mb-2">Creacion de Productos</h3>
                    <p className="p-5">
                        La creación de productos es esencial para ofrecer una experiencia culinaria excepcional a tus clientes. Con nuestra plataforma, puedes agregar y personalizar fácilmente
                        nuevos productos, establecer precios, descripciones y categorías, y asegurarte de que tu menú esté siempre actualizado.
                        Simplifica el proceso de creación de productos, experimenta con nuevas recetas y mantén tu oferta fresca y atractiva para satisfacer las necesidades de tus clientes más exigentes.
                    </p>
                </div>
                <img src="./productos.png" alt="productos" />

            </Link>
            <Link to={'/bill'} data-aos="fade-right" className="grid md:grid-cols-2 gap-3 mb-16">
                <img src="./productos.png" alt="productos" />

                <div className="flex flex-col items-center justify-center bg-blue-500 rounded-md" >
                    <h3 className="text-center text-xl mb-2">Cuentas</h3>
                    <p className="p-5">
                        En esta sección, encontrarás un registro completo de todas las facturas que han sido pagadas en tu restaurante. Desde facturas de clientes individuales hasta facturas corporativas,
                        nuestro sistema te proporciona un historial detallado de todas las transacciones completadas. Mantén un registro organizado y actualizado de los pagos recibidos, simplifica
                        la contabilidad y asegúrate de que todas las transacciones estén correctamente registradas para un análisis financiero preciso.
                    </p>
                </div>
            </Link>
        </section>
    )
}

export default ModeAdministrator