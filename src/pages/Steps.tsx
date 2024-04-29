
const Steps = () => {
    return (
        <div className="container pt-5 mx-auto">
            <p className="mb-5">Pasos para generar una venta:</p>
            <div>
                <p className="mb-2">Paso numero 1: Creacion de Ticket</p>
                <video src="./menu2.mp4" controls ></video>
            </div>
            <div>
                <p className="mb-2">Paso numero 2:  Cuando el Cocinero tenga la orden Completar la orden</p>
                <video src="./cocina.mp4" controls ></video>
            </div>
            <div>
                <p className="mb-2">Paso numero 3:  Cuando la orden este lista hacer lo siguiente:</p>
                <video src="./vendedor.mp4" controls ></video>
            </div>
            <div>
                <p className="mb-2">Paso numero 4:  Pago de ticket</p>
                <video src="./ticket.mp4" controls ></video>
            </div>
        </div>
    )
}

export default Steps