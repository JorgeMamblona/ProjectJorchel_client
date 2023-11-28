import './ReviewState.css'
import avatar from './../../../assets/holaaa.jpeg'

const ReviewState = () => {
    return (
        <div className="task-col review text-center">
            <div className="title">
                <h2>TO DO</h2>
            </div>
            <div className="task-review" >

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

export default ReviewState