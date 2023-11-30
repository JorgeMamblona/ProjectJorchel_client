import avatar from './../../../assets/holaaa.jpeg'
import './InProgressState.css'

const InProgressState = () => {

    return (
        <div className="task-col in-progress text-center">
            <div className="title">
                <h2>IN PROGRESS</h2>
            </div>
            <div className="task-inprogress" >
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

export default InProgressState