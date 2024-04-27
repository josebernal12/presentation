
const Users = () => {
    return (
        <div className="container  ">
            <h1 className="text-center p-10 text-2xl">Gestion de usuarios</h1>
            <div className="grid grid-cols-6  justify-center items-center gap-5 ">
                <div className="col-span-2">
                    <ul>
                        <li className="text-center mb-5 bg-blue-500 rounded-md p-2 hover:cursor-pointer hover:bg-blue-600 transition-all">Crear Usuarios</li>
                        <li className="text-center mb-5 bg-purple-500 rounded-md p-2 hover:cursor-pointer hover:bg-purple-600 transition-all">Actualizar  Usuarios</li>
                        <li className="text-center mb-5 bg-blue-500 rounded-md p-2 hover:cursor-pointer hover:bg-blue-600 transition-all">Eliminar Usuarios</li>
                        <li className="text-center mb-5 bg-purple-500 rounded-md p-2 hover:cursor-pointer hover:bg-purple-600 transition-all">Buscar  Usuarios</li>
                        <li className="text-center mb-5 bg-blue-500 rounded-md p-2 hover:cursor-pointer hover:bg-blue-600 transition-all">Imprimir tabla para excel</li>
                        <li className="text-center mb-5 bg-purple-500 rounded-md p-2 hover:cursor-pointer hover:bg-purple-600 transition-all">Imprimir tabla para pdf</li>
                    </ul>
                </div>
                <div className="col-span-4">
                   <video src="./menu2.mp4" controls></video>
                </div>
            </div>
        </div>
    )
}

export default Users