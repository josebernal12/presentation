import { Link } from "react-router-dom"

const ModeMembers = () => {
    return (
        <section className="container pt-10 ">
            <h3 id="modo-miembro" className="text-center mb-10 text-2xl">Modo Miembro:</h3>
            <Link to={'/menu'} data-aos="fade-left" className="grid md:grid-cols-2 gap-3 mb-16">
                <div className="flex flex-col items-center justify-center bg-purple-500 rounded-md" >
                    <h3 className="text-center text-xl mb-2">Menu</h3>
                    <p className="p-5">
                        ¡Disfruta de la comodidad de ordenar desde  el restaurante! Nuestro proceso
                        de pedido fácil de usar te permite crear tu orden perfecta en solo unos pocos clics. Explora nuestro menú hoy y descubre nuevas delicias para satisfacer tu apetito.
                    </p>
                </div>
                <img src="./menu.png" alt="menu" />
            </Link>
            <Link to={'/orders'} data-aos="fade-right" className="grid md:grid-cols-2 gap-3 mb-16">
                <img src="./ordenes.png" alt="ordenes" />
                <div className="flex flex-col items-center justify-center bg-blue-500 rounded-md" >
                    <h3 className="text-center text-xl mb-2">Ordenes</h3>
                    <p className="p-5">
                        En la sección de Órdenes Pendientes, puedes encontrar un registro completo de todas las órdenes que están esperando ser procesadas por nuestro equipo de cocina.
                        Desde tus pedidos más recientes hasta aquellos que están en espera, nuestra plataforma te proporciona una visión detallada de todas tus órdenes pendientes.
                    </p>
                </div>
            </Link>
            <Link to={'/orders-ready'} data-aos="fade-left" className="grid md:grid-cols-2 gap-3 mb-16">
                <div className="flex flex-col items-center justify-center bg-purple-500 rounded-md" >
                    <h3 className="text-center text-xl mb-2">Ordenes Listas Para Entregar</h3>
                    <p className="p-5">
                        En la sección de Órdenes Listas para Entregar, encontrarás un registro completo de todas las órdenes que han sido preparadas y están listas para ser entregadas a nuestros clientes.
                        Desde las deliciosas creaciones hasta los sabrosos platos, nuestra plataforma te brinda una visión detallada de todas las órdenes que esperan ser recogidas o entregadas
                    </p>
                </div>
                <img src="./ordenes-lista.png" alt="ordenes lista" />

            </Link>
            <Link to={'/pay'} data-aos="fade-right" className="grid md:grid-cols-2 gap-3 mb-16">
                <img src="./pagar.png" alt="productos" />

                <div className="flex flex-col items-center justify-center bg-blue-500 rounded-md" >
                    <h3 className="text-center text-xl mb-2">Pagar Cuenta</h3>
                    <p className="p-5">
                        En la sección de Pagar Órdenes, puedes finalizar fácilmente tus compras y completar el proceso de pago para tus órdenes pendientes.
                        Desde tus deliciosos platillos hasta tus bebidas favoritas, nuestra plataforma te brinda una experiencia de pago segura y conveniente.
                    </p>
                </div>
            </Link>
        </section>
    )
}

export default ModeMembers