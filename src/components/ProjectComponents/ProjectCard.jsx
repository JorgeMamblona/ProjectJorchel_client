import { Link, useNavigate } from 'react-router-dom'

import AvatarList from './../AvatarList/AvatarList'

import './ProjectCard.css'
import { Button, Form, Modal } from 'react-bootstrap'

import { prettyDate } from '../../utils/prettyDate'
import { useState } from 'react'
import projectService from '../../services/projects.services'


const ProjectCard = ({ title, state, endDate, colaborators, _id: project_id, loadProjects }) => {

    const [show, setShow] = useState(false);
    const [project, setProject] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const deleteProject = () => {
        projectService
            .delete(project_id)
            .then(() => {
                loadProjects()
                handleClose()

            })
            .catch(err => console.log(err))
    }


    return (
        <div className={`project-card ${state}`}>
            <div className="header-project-card d-flex justify-content-between">
                <h5>{title}</h5>
                <div className="options d-flex">
                    <Link>
                        <Button className='button-options' onClick={handleShow}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.24998 19.7917C6.24998 20.3442 6.46947 20.8741 6.86017 21.2648C7.25087 21.6555 7.78078 21.875 8.33331 21.875H16.6666C17.2192 21.875 17.7491 21.6555 18.1398 21.2648C18.5305 20.8741 18.75 20.3442 18.75 19.7917V7.29167H6.24998V19.7917ZM8.33331 9.375H16.6666V19.7917H8.33331V9.375ZM16.1458 4.16667L15.1041 3.125H9.89581L8.85415 4.16667H5.20831V6.25H19.7916V4.16667H16.1458Z" fill="white" fillOpacity="0.5" />
                            </svg>
                        </Button>
                    </Link>
                    <Link to={`/project/${project_id}/edit`} >
                        <Button className='button-options' >
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0625 3.77082L15.2292 7.93749M1.16666 17.8333H5.33332L16.2708 6.89582C16.5444 6.62224 16.7614 6.29744 16.9095 5.93998C17.0576 5.58252 17.1338 5.1994 17.1338 4.81249C17.1338 4.42558 17.0576 4.04246 16.9095 3.685C16.7614 3.32754 16.5444 3.00274 16.2708 2.72916C15.9972 2.45557 15.6724 2.23855 15.315 2.09048C14.9575 1.94242 14.5744 1.86621 14.1875 1.86621C13.8006 1.86621 13.4175 1.94242 13.06 2.09048C12.7025 2.23855 12.3777 2.45557 12.1042 2.72916L1.16666 13.6667V17.8333Z" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </Button>


                    </Link>
                    <Form.Group className="mb-3">
                        <Form.Select className='my-form-select' type="text" value='' name='state' onChange=''>
                            <option value='TODO'>To Do</option>
                            <option value="ONGOING">On Going</option>
                            <option value="REVIEW">Review</option>
                            <option value="DONE">Done</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            <hr />
            <div className="body-project-card d-flex justify-content-around">
                <p>{prettyDate(endDate)}</p>
                <p>Tasks to do:</p>
                <p>Tasks on going:</p>
                <p>Tasks on revies:</p>
                <p>Tasks done:</p>
                <AvatarList participants={colaborators} />
            </div>

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
                    <Button variant="primary myButton3" onClick={deleteProject}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </div >
    )
}

export default ProjectCard





