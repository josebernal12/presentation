import  { useState } from 'react';

function BillAdmin() {
    const [videoSrc, setVideoSrc] = useState('./descargar-factura.mp4');

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
                            <button onClick={() => handleButtonClick('./descargar-factura.mp4')}>
                                Descargar Factura
                            </button>
                        </li>
                        <li className="text-center mb-5 bg-purple-500 rounded-md p-2 hover:cursor-pointer hover:bg-purple-600 transition-all">
                            <button onClick={() => handleButtonClick('./imprimir-factura.mp4')}>
                                Imprimir Factura
                            </button>
                        </li>
                        <li className="text-center mb-5 bg-blue-500 rounded-md p-2 hover:cursor-pointer hover:bg-blue-600 transition-all">
                            <button onClick={() => handleButtonClick('./actualizar-factura.mp4')}>
                                Actualizar Factura
                            </button>
                        </li>
                     
                    </ul>
                </div>
                <div className="col-span-4">
                    <video src={videoSrc} controls></video>
                </div>
            </div>
        </div>
    );
}

export default BillAdmin;
