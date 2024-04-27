
const ModeMembers = () => {
    return (
        <section className="container pt-10 ">
            <h3 id="modo-miembro" className="text-center mb-10 text-2xl">Modo Miembro:</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-16">
                <div className="flex flex-col items-center justify-center" >
                    <h3 className="text-center text-xl mb-2">Menu</h3>
                    <p>
                        ¡Disfruta de la comodidad de ordenar desde  el restaurante! Nuestro proceso
                        de pedido fácil de usar te permite crear tu orden perfecta en solo unos pocos clics. Explora nuestro menú hoy y descubre nuevas delicias para satisfacer tu apetito.
                    </p>
                </div>
                <img src="./menu.png" alt="menu" />
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-16">
                <img src="./ordenes.png" alt="ordenes" />
                <div className="flex flex-col items-center justify-center" >
                    <h3 className="text-center text-xl mb-2">Ordenes</h3>
                    <p>
                        En la sección de Órdenes Pendientes, puedes encontrar un registro completo de todas las órdenes que están esperando ser procesadas por nuestro equipo de cocina.
                        Desde tus pedidos más recientes hasta aquellos que están en espera, nuestra plataforma te proporciona una visión detallada de todas tus órdenes pendientes.
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-16">
                <div className="flex flex-col items-center justify-center" >
                    <h3 className="text-center text-xl mb-2">Ordenes Listas Para Entregar</h3>
                    <p>
                        En la sección de Órdenes Listas para Entregar, encontrarás un registro completo de todas las órdenes que han sido preparadas y están listas para ser entregadas a nuestros clientes.
                        Desde las deliciosas creaciones hasta los sabrosos platos, nuestra plataforma te brinda una visión detallada de todas las órdenes que esperan ser recogidas o entregadas
                    </p>
                </div>
                <img src="./ordenes-lista.png" alt="ordenes lista" />

            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-16">
                <img src="./pagar.png" alt="productos" />

                <div className="flex flex-col items-center justify-center" >
                    <h3 className="text-center text-xl mb-2">Pagar Cuenta</h3>
                    <p>
                        En la sección de Pagar Órdenes, puedes finalizar fácilmente tus compras y completar el proceso de pago para tus órdenes pendientes.
                        Desde tus deliciosos platillos hasta tus bebidas favoritas, nuestra plataforma te brinda una experiencia de pago segura y conveniente.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ModeMembers