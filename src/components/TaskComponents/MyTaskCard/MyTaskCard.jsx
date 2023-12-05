import './MyTaskCard.css'
import AvatarList from '../../AvatarList/AvatarList'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { prettyDate } from '../../../utils/prettyDate'
import taskService from '../../../services/tasks.services'
import UsersListForm from "../../UsersListForm/UsersListForm"




const MyTaskCard = ({
    title,
    description,
    state,
    startDate,
    endDate,
    project,
    _id,
    participants,
    loadMyTasks
}) => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [showEdit, setShowEdit] = useState(false)
    const handleCloseEdit = () => setShowEdit(false)
    const handleShowEdit = () => setShowEdit(true)

    const [editFormData, seteditFormData] = useState({
        title: title,
        description: description,
        state: state,
        startDate: startDate,
        endDate: endDate,
        colaborators: [],
        _id: _id

    })

    const handleInputChange = e => {
        const { value, name } = e.target
        seteditFormData({ ...editFormData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        taskService
            .edit(editFormData)
            .then(() => {
                loadMyTasks()
                navigate("/task/myTasks")
            })
            .catch(err => console.log(err))

    }
    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                seteditFormData({ ...editFormData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const setUsers = list => {
        seteditFormData({ ...editFormData, colaborators: list })
    }

    const deleteTask = () => {
        taskService
            .delete(_id)
            .then(() => {
                loadMyTasks()
                handleClose()
            })
            .catch(err => console.log(err))
    }

    const [taskState, setTaskState] = useState({
        _id,
        state
    })

    const updateState = input => {
        setTaskState({ _id, state: input })
        handleStateSubmit()
    }

    const handleStateSubmit = () => {

        taskService
            .edit(taskState)
            .then()
            .catch(err => console.log(err))
    }


    useEffect(() => {
        loadMyTasks()
        handleStateSubmit()

    }, [taskState])



    return (
        <div className={`task-data row my-task-${taskState.state} `}>
            <Link to={`/task/${_id}`}
            ><div className="col-3">
                    <p>{title}</p>
                </div>
            </Link>

            <div className="col-3">
                <p>End date: {prettyDate(endDate)}</p>
            </div>
            <div className="col-3">
                <div className="colaborators">
                    <AvatarList participants={participants} />
                </div>
            </div>
            <div className="col-3">
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
                    <Form.Group >
                        <div className=" my-project-accordion accordion-flush prueba" id={_id}>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className={` accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${_id}`} aria-expanded="false" aria-controls={`flush-collapse-${_id}`} >
                                        <option value='TODO'>{taskState.state}</option>
                                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.26946 7.6625L12.6817 1.95767C12.7826 1.85129 12.8626 1.72499 12.9173 1.586C12.9719 1.447 13 1.29803 13 1.14758C13 0.843741 12.8855 0.552344 12.6817 0.337496C12.5807 0.231114 12.4609 0.146727 12.3291 0.0891533C12.1972 0.0315797 12.0559 0.00194768 11.9131 0.00194767C11.6249 0.00194766 11.3484 0.122648 11.1446 0.337496L6.50092 5.24365L1.85725 0.337496C1.75662 0.230555 1.6369 0.145673 1.505 0.087748C1.37309 0.0298226 1.23161 -5.14413e-07 1.08872 -5.20659e-07C0.945822 -5.26905e-07 0.804341 0.0298226 0.672435 0.087748C0.54053 0.145673 0.420811 0.230555 0.320184 0.337496C0.218729 0.443563 0.1382 0.569755 0.0832456 0.708793C0.0282915 0.84783 -6.39625e-07 0.996961 -6.46209e-07 1.14758C-6.52793e-07 1.2982 0.0282915 1.44733 0.0832456 1.58637C0.1382 1.72541 0.218729 1.8516 0.320184 1.95767L5.73239 7.6625C5.83302 7.76944 5.95274 7.85433 6.08464 7.91225C6.21655 7.97018 6.35803 8 6.50092 8C6.64382 8 6.7853 7.97018 6.9172 7.91225C7.04911 7.85433 7.16883 7.76945 7.26946 7.6625Z" fill="white" />
                                        </svg>

                                    </button>
                                </h2>

                                <div id={`flush-collapse-${_id}`} class="my-hr accordion-collapse collapse" data-bs-parent={`#${_id}`} >
                                    <hr />
                                    <div ><option value='TODO' onClick={() => updateState('TODO')}>To Do</option>
                                        <hr />
                                        <option value="ONGOING" onClick={() => updateState('ONGOING')}>On Going</option>
                                        <hr />
                                        <option value="REVIEW" onClick={() => updateState('REVIEW')}>Review</option>
                                        <hr />
                                        <option value="DONE" onClick={() => updateState('DONE')}>Done</option>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form.Group>
                    <Modal className='my-modal' show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>You are going to delete {title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            You will not be able to recover the file. Are you sure?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary myButton4-outline" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary myButton3" onClick={deleteTask}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>



                    <Modal className='' show={showEdit} onHide={handleCloseEdit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editing {title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="edit-project-form">
                                <Form onSubmit={handleFormSubmit}>
                                    <div className="row">
                                        <div className="col-6 item-list">
                                            <Form.Label>Title *</Form.Label>
                                            <Form.Control type="text" value={editFormData.title} name='title' placeholder={project.title} onChange={handleInputChange}></Form.Control>
                                        </div>
                                        <div className="col-5 ">
                                            <Row>
                                                <Form.Label>Participants:</Form.Label>
                                                <Col md={{ span: 6 }}>
                                                    <UsersListForm setUsers={setUsers} />
                                                </Col>
                                                <Col md={{ span: 6 }}>
                                                    {
                                                        editFormData.colaborators.map(elm => {
                                                            return <p key={elm._id}>{elm.username}</p>
                                                        })
                                                    }
                                                </Col>
                                            </Row >
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">

                                            <Form.Group className="mb-3">
                                                <Form.Label>Description *</Form.Label>
                                                <Form.Control type="text" value={editFormData.description} name='description' placeholder={project.description} onChange={handleInputChange}></Form.Control>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2 item-list">
                                            <Form.Group className="mb-3">
                                                <Form.Label>State </Form.Label>
                                                <Form.Select type="text" value={editFormData.state} name='state' onChange={handleInputChange}  >
                                                    <option value='TODO'>To Do</option>
                                                    <option value="ONGOING">On Going</option>
                                                    <option value="REVIEW">Review</option>
                                                    <option value="DONE">Done</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-4">

                                            <Form.Group className="mb-3">
                                                <Form.Label>Image</Form.Label>
                                                <Form.Control type="file" onChange={handleFileUpload}></Form.Control>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-5 item-list">

                                            <Col >
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Current start date: {prettyDate(project.startDate)}</Form.Label>
                                                    <Form.Control type="date" value={editFormData.startDate} name='startDate' onChange={handleInputChange}></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </div>
                                        <div className="col-5">


                                            <Form.Group className="mb-3 mt-3">
                                                <Form.Label>End date</Form.Label>
                                                <Form.Control type="date" value={editFormData.endDate} name='endDate' onChange={handleInputChange}></Form.Control>
                                            </Form.Group>
                                        </div>

                                    </div>


                                    <Button className="mt-3 myButton2" type="submit" onClick={handleCloseEdit}>
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Modal.Body>

                    </Modal>


                </div>




            </div>
        </div >
    )


}

export default MyTaskCard