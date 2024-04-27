import  { useState } from 'react';

function Orders() {
    const [videoSrc, setVideoSrc] = useState('./agregar-producto.mp4');

    const handleButtonClick = (src: string) => {
        setVideoSrc(src);
    };

    return (
        <div className="container">
            <h1 className="text-center p-10 text-2xl">Gestión de Productos</h1>
            <div className="grid grid-cols-6 justify-center items-center gap-5">
                <div className="col-span-2">
                    <ul>
                        <li className="text-center mb-5 bg-blue-500 rounded-md p-2 hover:cursor-pointer hover:bg-blue-600 transition-all">
                            <button onClick={() => handleButtonClick('./agregar-producto.mp4')}>
                                Entregar Orden
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
    );
}

export default Orders;
