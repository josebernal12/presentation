
const Roles = () => {
    return (
        <section className="container mx-auto p-20">
            <h3 className="text-center text-2xl">El Sistema Cuenta con 2 Roles: Modo Admin y Modo Miembro</h3>
            <div className="grid md:grid-cols-2 py-5 gap-3">
                <button onClick={() => window.location.href = '#modo-administrador'} className="bg-gray-700 p-3 rounded-md">
                    <h3 className="text-center text-2xl mb-3">Administrador</h3>
                    <p>El rol de administrador brinda acceso completo al sistema, permitiendo la gestión de empleados, inventario, productos y
                        todas las cuentas generadas. Desde la creación y asignación de perfiles de usuario hasta el control total sobre los recursos del restaurante,
                        el modo Admin ofrece herramientas poderosas para una administración eficiente.</p>
                </button>
                <button onClick={() => window.location.href = '#modo-miembro'} className="bg-gray-700 p-3 rounded-md">
                    <h3 className="text-center text-2xl mb-3">Miembro</h3>
                    <p>
                        Por otro lado, el rol de miembro ofrece la posibilidad de generar órdenes en tiempo real a lo largo del día. Los miembros pueden
                        acceder al catálogo de productos, realizar pedidos, y contribuir activamente al proceso de operación del restaurante, garantizando un servicio ágil y
                        eficiente para los clientes.
                    </p>
                </button>
            </div>
        </section>
    )
}

export default Roles