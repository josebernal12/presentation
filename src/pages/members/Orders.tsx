import { useState } from 'react';
import Nav from '../principal/components/Nav';
import { Link } from 'react-router-dom';

function Orders() {
    const [videoSrc, setVideoSrc] = useState('./orden-completada.mp4');

    const handleButtonClick = (src: string) => {
        setVideoSrc(src);
    };

    return (
        <>
            <Nav />
            <Link to={'/roles'} className="bg-white text-black rounded-2xl p-2  flex gap-3 hover:scale-105 transition-all font-bold m-5 w-32">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
                Regresar
            </Link>
            <div className="container mx-auto">
                <h1 className="text-center p-10 text-2xl">Gestión de Productos</h1>
                <div className="grid grid-cols-6 justify-center items-center gap-5">
                    <div className="col-span-2">
                        <ul>
                            <li className="text-center mb-5 bg-blue-500 rounded-md p-2 hover:cursor-pointer hover:bg-blue-600 transition-all">
                                <button onClick={() => handleButtonClick('./orden-completada.mp4')}>
                                    Entregar Orden
                                </button>
                            </li>
                            <li className="text-center mb-5 bg-blue-500 rounded-md p-2 hover:cursor-pointer hover:bg-blue-600 transition-all">
                                <button onClick={() => handleButtonClick('./cancelar-orden.mp4')}>
                                    Cancelar Orden
                                </button>
                            </li>
                            {/* <li className="text-center mb-5 bg-purple-500 rounded-md p-2 hover:cursor-pointer hover:bg-purple-600 transition-all">
                            <button onClick={() => handleButtonClick('./actualizar-producto.mp4')}>
                                Actualizar Producto
                            </button>
                        </li>
                        <li className="text-center mb-5 bg-blue-500 rounded-md p-2 hover:cursor-pointer hover:bg-blue-600 transition-all">
                            <button onClick={() => handleButtonClick('./eliminar-producto.mp4')}>
                                Eliminar Producto
                            </button>
                        </li>
                        <li className="text-center mb-5 bg-purple-500 rounded-md p-2 hover:cursor-pointer hover:bg-purple-600 transition-all">
                            <button onClick={() => handleButtonClick('./buscar-producto.mp4')}>
                                Buscar Producto
                            </button>
                        </li> */}
                        </ul>
                    </div>
                    <div className="col-span-4">
                        <video src={videoSrc} controls></video>
                    </div>
                </div>
            </div>
            <img src="./whatsapp.png" alt="imagen whatsapp" style={{ position: 'fixed', bottom: '40px', right: '40px', width: '70px' }} className="hover:scale-110 hover:cursor-pointer transition-all" />

        </>
    );
}

export default Orders;
