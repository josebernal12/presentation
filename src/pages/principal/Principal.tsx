import Nav from "./components/Nav"

const Principal = () => {
    return (
        <>
            <Nav />
            <div className="imagen-header flex flex-col items-center justify-center space-y-5 ">
                <h2 className=" text-xl md:text-5xl title">Gestiona con Sabor: Tu Solución Integral para Pedidos de Restaurantes</h2>
                <button className="bg-white text-black rounded-2xl p-3  flex gap-3 hover:scale-105 transition-all font-bold">
                    Comenzar Ahora Mismo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
            <div className="container mt-10 mx-auto flex flex-col md:flex-row items-center justify-center gap-3">
                <img src="./ticket2.png" alt="ticket imagen" />
                <div className="flex flex-col items-center justify-center">
                    <p className="p-2 md:p-0">  Optimiza la operatividad de tu equipo de servicio al simplificar el procedimiento de pedidos. Al mejorar la eficiencia en el proceso de solicitudes, tu personal
                        puede dedicar más tiempo a ofrecer un servicio excepcional, brindando una experiencia más satisfactoria a tus clientes.</p>
                    <button className="bg-white text-black rounded-2xl p-3  flex gap-3 hover:scale-105 transition-all font-bold my-5 md:my-0">
                        Comenzar Ahora Mismo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="bg-gray-900 p-5">

                <div className="container mx-auto mt-10">
                    <h3 className="text-xl mb-10 text-center"> experimentarás un aumento significativo en la eficiencia y mejoras sustanciales en tu flujo de trabajo</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4">
                        <div className="mx-auto mb-5 lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <h4 className="text-center">Mejora de Rendimiento</h4>
                            <p className="text-center text-sm mt-3 text-gray-400">Experimenta un salto en tu productividad con nuestra aplicación, diseñada para simplificar tus tareas diarias y potenciar tu eficiencia laboral,
                                permitiéndote enfocarte en lo que realmente importa</p>
                        </div>
                        <div className="mx-auto mb-5 lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                            </svg>

                            <h4 className="text-center">Control de Inventario</h4>
                            <p className="text-center text-sm mt-3 text-gray-400">Domina tu inventario con nuestra herramienta, simplificando la gestión diaria y potenciando el control preciso de tus existencias,
                                para que puedas enfocarte en optimizar tu negocio sin preocuparte por la logística.</p>
                        </div>
                        <div className="mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                            <h4 className="text-center">Control de Empleados</h4>
                            <p className="text-center text-sm mt-3 text-gray-400">Optimiza la gestión de tu equipo con nuestra plataforma, simplificando la administración de personal y potenciando la coordinación eficiente entre empleados,
                                para impulsar el éxito de tu negocio sin complicaciones.</p>
                        </div>
                        <div className="mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>

                            <h4 className="text-center">Control de Facturas</h4>
                            <p className="text-center text-sm mt-3 text-gray-400">Facilita la gestión de facturas con nuestra solución, simplificando el seguimiento de pagos y potenciando el control detallado de tus transacciones financieras,
                                para que puedas mantener el flujo de efectivo sin contratiempos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <h3 className="text-xl text-center">Contaras con pagos en linea de manera segura</h3>
                <div className="grid md:grid-cols-2 p-10">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-center mb-5 ">Contarás con la conveniencia y seguridad de los pagos en línea al utilizar nuestra plataforma. Nuestro sistema garantiza transacciones seguras y protegidas, brindándote tranquilidad y confianza en cada compra o transacción financiera que realices.
                            Simplifica tus procesos de pago y disfruta de una experiencia fluida y sin complicaciones con nosotros</p>
                        <button className="bg-white text-black rounded-2xl p-3  flex gap-3 hover:scale-105 transition-all font-bold">Contactanos</button>

                    </div>
                    <img src="./pagos-linea.png" alt="pagos" />
                </div>
            </div>
            <div className="bg-gray-900 p-5">
                <div className="container mx-auto mt-10">
                    <h3 className="text-center text-xl mb-5">Contactanos</h3>
                    <form className="flex flex-col justify-center items-center form mx-auto">
                        <div className="flex flex-col w-full mb-5 ">
                            <label htmlFor="nombre" className="mb-1 text-white text-center">Nombre:</label>
                            <input type="text" id="nombre" placeholder="Nombre" className="bg-gray-700 w-full p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col w-full mb-5">
                            <label htmlFor="email" className="mb-1 text-white text-center">Email:</label>
                            <input type="email" id="email" placeholder="Email" className="bg-gray-700 w-full p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col w-full mb-5">
                            <label htmlFor="mensaje" className="mb-1 text-white text-center">Mensaje:</label>
                            <textarea id="mensaje" cols={30} rows={10} placeholder="Mensaje" className="bg-gray-700 w-full p-1 rounded-md"></textarea>
                        </div>
                        <button className="bg-white text-black rounded-2xl p-3  flex gap-3 hover:scale-105 transition-all font-bold mt-5 md:mt-0">Enviar Mensaje</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Principal