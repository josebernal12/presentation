import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <header className="container p-20 flex flex-col">
                <h1 className="w-full mx-auto text-center text-3xl">Gestiona con Sabor: Tu Solución Integral para Pedidos de Restaurantes</h1>
                <div className="text-center ">
                    <button className="mx-auto text-center bg-purple-400 my-10 p-2 rounded-md hover:bg-purple-500 me-5">Iniciar ahora mismo</button>
                    <Link to={'/steps'} className="mx-auto text-center bg-blue-400 my-10 p-2 rounded-md hover:bg-blue-500">Pasos para generar una venta</Link>
                </div>
            </header>
            <section className="container p-20">
                <h3 className="text-center text-2xl">El Sistema Cuenta con 2 Roles: Modo Admin y Modo Miembro</h3>
                <div className="grid grid-cols-2 py-5 gap-3">
                    <button onClick={() => window.location.href='#modo-administrador'} className="bg-gray-700 p-3 rounded-md">
                        <h3 className="text-center text-2xl mb-3">Administrador</h3>
                        <p>El rol de administrador brinda acceso completo al sistema, permitiendo la gestión de empleados, inventario, productos y
                            todas las cuentas generadas. Desde la creación y asignación de perfiles de usuario hasta el control total sobre los recursos del restaurante,
                            el modo Admin ofrece herramientas poderosas para una administración eficiente.</p>
                    </button>
                    <div className="bg-gray-700 p-3 rounded-md">
                        <h3 className="text-center text-2xl mb-3">Miembro</h3>
                        <p>
                            Por otro lado, el rol de miembro ofrece la posibilidad de generar órdenes en tiempo real a lo largo del día. Los miembros pueden
                            acceder al catálogo de productos, realizar pedidos, y contribuir activamente al proceso de operación del restaurante, garantizando un servicio ágil y
                            eficiente para los clientes.
                        </p>
                    </div>
                </div>
            </section>
            {/* <section className="container pt-10">
                <p className="mb-3">Ordena con Facilidad: Haz tus Pedidos a Través de Nuestro Sistema</p>
                <div>
                    <img src="./menu.png" alt="menu" />
                </div>
            </section>
            <br /> */}
            <div className="container  pt-20 flex flex-row-reverse gap-3 items-center">
                <div className="dashboard-text">
                    <h3 className="mb-3 font-bold text-2xl">Domina tus Ventas: Gestiona todo desde tu Dashboard Centralizado</h3>
                    <p>Con nuestro intuitivo dashboard centralizado, tendrás el control absoluto sobre tus ventas. Visualiza datos en tiempo real, gestiona inventario, realiza análisis detallados y
                        toma decisiones informadas para impulsar el crecimiento de tu negocio. Simplifica tu gestión y maximiza tus resultados con nuestra poderosa herramienta de ventas</p>
                </div>
                <div>
                    <img src="./dashboard.png" alt="dashboard" />
                </div>
            </div>

            <section className="container pt-10">
                <h3 id="modo-administrador" className="text-center mb-10 text-2xl">Modo Administrador:</h3>
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex flex-col items-center justify-center" >
                        <h3 className="text-center text-xl mb-2">Gestion de Usuarios</h3>
                        <p>
                            En esta sección, podrás administrar todos los aspectos relacionados con los usuarios del sistema. Desde la creación y gestión de cuentas hasta la asignación de roles y permisos,
                            nuestra plataforma te ofrece un control completo sobre quién tiene acceso y qué acciones pueden realizar dentro del sistema.
                            Simplifica la gestión de usuarios y garantiza la seguridad de tus datos con nuestras herramientas intuitivas y personalizables
                        </p>
                    </div>
                    <img src="./usuarios.png" alt="usuarios" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <img src="./inventario.png" alt="inventario" />
                    <div className="flex flex-col items-center justify-center" >
                        <h3 className="text-center text-xl mb-2">Gestión de Inventario</h3>
                        <p>
                            La gestión de inventario es fundamental para el éxito de tu restaurante, y nuestra plataforma te brinda las herramientas necesarias para llevarla a cabo de manera eficiente.
                            Desde el seguimiento de existencias hasta la realización de pedidos y el control de costos, podrás supervisar cada aspecto de tu inventario con facilidad.
                            Optimiza tus operaciones, evita faltantes y maximiza la rentabilidad con nuestra completa suite de herramientas de gestión de inventario
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex flex-col items-center justify-center" >
                        <h3 className="text-center text-xl mb-2">Creacion de Productos</h3>
                        <p>
                            La creación de productos es esencial para ofrecer una experiencia culinaria excepcional a tus clientes. Con nuestra plataforma, puedes agregar y personalizar fácilmente
                            nuevos productos, establecer precios, descripciones y categorías, y asegurarte de que tu menú esté siempre actualizado.
                            Simplifica el proceso de creación de productos, experimenta con nuevas recetas y mantén tu oferta fresca y atractiva para satisfacer las necesidades de tus clientes más exigentes.
                        </p>
                    </div>
                    <img src="./productos.png" alt="productos" />

                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <img src="./productos.png" alt="productos" />

                    <div className="flex flex-col items-center justify-center" >
                        <h3 className="text-center text-xl mb-2">Cuentas</h3>
                        <p>
                            En esta sección, encontrarás un registro completo de todas las facturas que han sido pagadas en tu restaurante. Desde facturas de clientes individuales hasta facturas corporativas,
                            nuestro sistema te proporciona un historial detallado de todas las transacciones completadas. Mantén un registro organizado y actualizado de los pagos recibidos, simplifica
                            la contabilidad y asegúrate de que todas las transacciones estén correctamente registradas para un análisis financiero preciso.
                        </p>
                    </div>
                </div>
            </section>

            <img src="./whatsapp.png" alt="imagen whatsapp" style={{ position: 'fixed', bottom: '40px', right: '40px', width: '70px' }} className="hover:scale-110 hover:cursor-pointer transition-all" />


        </>
    )
}

export default Home