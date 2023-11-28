import './DoneState.css'
import avatar from './../../../assets/holaaa.jpeg'
const DoneState = () => {
    return (
        <div className="task-col done text-center">
            <div className="title">
                <h2>DONE</h2>
            </div>
            <div className="task-done" >

                <h3>Soy la tarea</h3>
                <div className="task-info">
                    <p>Fecha de entrega:</p>
                    <div className="contributors">
                        <div className="avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="avatar">
                            <img src={avatar} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DoneState