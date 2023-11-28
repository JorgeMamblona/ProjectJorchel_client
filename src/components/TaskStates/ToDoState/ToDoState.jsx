import './ToDoState.css'

import avatar from './../../../assets/holaaa.jpeg'

const ToDoState = () => {
    return (
        <div className="task-col to-do text-center">
            <div className="title">
                <h2>TO DO</h2>
            </div>
            <div className="task" >

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

export default ToDoState