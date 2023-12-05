import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import taskService from "../../../services/tasks.services"
import { Link } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import './TaskDetailsPage.css'
import { prettyDate } from "../../../utils/prettyDate"



const TaskDetailsPage = () => {


    const { task_id } = useParams()

    const [task, setTask] = useState()



    const loadTask = () => {

        taskService
            .tasksDetails(task_id)
            .then(({ data }) => setTask(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadTask()
    }, [])
    const handleShowEdit = () => {

    }
    const handleShow = () => {

    }


    return (
        !task
            ?
            <></>
            :
            <div className="task-details-page">
                <h1>{task.project.title}</h1>

                <div className="task-container">
                    <div className="task-container-header d-flex">
                        <h2>{task.title}</h2>
                        <div className="options d-flex align-items-center">
                            <Link>
                                <Button className='button-options' onClick={handleShow}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.24998 19.7917C6.24998 20.3442 6.46947 20.8741 6.86017 21.2648C7.25087 21.6555 7.78078 21.875 8.33331 21.875H16.6666C17.2192 21.875 17.7491 21.6555 18.1398 21.2648C18.5305 20.8741 18.75 20.3442 18.75 19.7917V7.29167H6.24998V19.7917ZM8.33331 9.375H16.6666V19.7917H8.33331V9.375ZM16.1458 4.16667L15.1041 3.125H9.89581L8.85415 4.16667H5.20831V6.25H19.7916V4.16667H16.1458Z" fill="white" fillOpacity="0.5" />
                                    </svg>
                                </Button>
                            </Link>
                            <Link  >
                                <Button className='button-options' onClick={handleShowEdit}>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0625 3.77082L15.2292 7.93749M1.16666 17.8333H5.33332L16.2708 6.89582C16.5444 6.62224 16.7614 6.29744 16.9095 5.93998C17.0576 5.58252 17.1338 5.1994 17.1338 4.81249C17.1338 4.42558 17.0576 4.04246 16.9095 3.685C16.7614 3.32754 16.5444 3.00274 16.2708 2.72916C15.9972 2.45557 15.6724 2.23855 15.315 2.09048C14.9575 1.94242 14.5744 1.86621 14.1875 1.86621C13.8006 1.86621 13.4175 1.94242 13.06 2.09048C12.7025 2.23855 12.3777 2.45557 12.1042 2.72916L1.16666 13.6667V17.8333Z" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </Button>


                            </Link>
                        </div>
                    </div>
                    <div className="task-body d-flex">
                        <div className="main-description">
                            <p><b>Description:</b>{task.description}</p>
                        </div>
                        <div className="main-details">
                            <p><b>Start date: </b>{prettyDate(task.startDate)}</p>
                            <p><b>End date: </b>{prettyDate(task.endDate)}</p>
                            <div className="task-informator d-flex">
                                <p><b>Informator: </b>{task.owner.username}</p>
                                <img className='avatar' src={task.owner.avatar} alt="" />
                            </div>
                            <div className="task-informator d-flex">
                                <p><b>Participants: </b></p>{task.participants.map((elm) => {
                                    elm.username
                                })}
                                <img className='avatar' src={task.owner.avatar} alt="" />
                            </div>

                        </div>

                    </div>

                </div>



            </div>

    )
}

export default TaskDetailsPage





