import Header from "../components/Header"
import ModeAdministrator from "../components/ModeAdministrator"
import ModeMembers from "../components/ModeMembers"
import Roles from "../components/Roles"

const Home = () => {
    return (
        <>
            <Header />
            <Roles />
            {/* <section className="container pt-10">
                <p className="mb-3">Ordena con Facilidad: Haz tus Pedidos a Través de Nuestro Sistema</p>
                <div>
                    <img src="./menu.png" alt="menu" />
                </div>
            </section>
            <br /> */}
            {/* <div className="container  pt-20 flex flex-row-reverse gap-3 items-center">
                <div className="dashboard-text">
                    <h3 className="mb-3 font-bold text-2xl">Domina tus Ventas: Gestiona todo desde tu Dashboard Centralizado</h3>
                    <p>Con nuestro intuitivo dashboard centralizado, tendrás el control absoluto sobre tus ventas. Visualiza datos en tiempo real, gestiona inventario, realiza análisis detallados y
                        toma decisiones informadas para impulsar el crecimiento de tu negocio. Simplifica tu gestión y maximiza tus resultados con nuestra poderosa herramienta de ventas</p>
                </div>
                <div>
                    <img src="./dashboard.png" alt="dashboard" />
                </div>
            </div> */}

            <ModeAdministrator />
            <ModeMembers />
            <img src="./whatsapp.png" alt="imagen whatsapp" style={{ position: 'fixed', bottom: '40px', right: '40px', width: '70px' }} className="hover:scale-110 hover:cursor-pointer transition-all" />


        </>
    )
}

export default Home