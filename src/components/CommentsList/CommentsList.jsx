import { useEffect, useState, useContext } from "react"
import commentService from "../../services/comment.services"
import CommentCard from "../CommentCard/CommentCard"
import { Button, Form, Col } from "react-bootstrap"
import './CommentsList.css'

const CommentsList = ({ scope, parent, handleCommentsWindow }) => {
    const [comments, setComments] = useState()

    useEffect(() => {
        loadCommnents()
        setFormData({ ...formData, parent: parent })
    }, [parent])

    const loadCommnents = () => {

        commentService
            .getParentComments(parent)
            .then(({ data }) => setComments(data))
            .catch(err => console.log(err))
    }

    const [formData, setFormData] = useState({
        parent,
        scope,
        content: ''
    })

    const handleInputChange = e => {

        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const sendComment = () => {

        commentService
            .create(formData)
            .then(() => loadCommnents())
            .catch(err => console.log(err))
    }

    return (
        !comments
            ?
            <></>
            :
            <div className="comment-box">
                <Button className='close-button' onClick={handleCommentsWindow} >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.892 0.302021C12.7995 0.209317 12.6896 0.135769 12.5686 0.085588C12.4477 0.0354065 12.318 0.00957632 12.187 0.00957632C12.0561 0.00957632 11.9264 0.0354065 11.8054 0.085588C11.6844 0.135769 11.5745 0.209317 11.482 0.302021L6.59202 5.18202L1.70202 0.29202C1.60944 0.199438 1.49953 0.125998 1.37856 0.0758934C1.2576 0.0257884 1.12795 9.75509e-10 0.997021 0C0.86609 -9.75509e-10 0.736441 0.0257884 0.615477 0.0758934C0.494513 0.125998 0.384602 0.199438 0.29202 0.29202C0.199438 0.384602 0.125998 0.494513 0.0758934 0.615477C0.0257884 0.736441 -9.75509e-10 0.86609 0 0.997021C9.75509e-10 1.12795 0.0257884 1.2576 0.0758934 1.37856C0.125998 1.49953 0.199438 1.60944 0.29202 1.70202L5.18202 6.59202L0.29202 11.482C0.199438 11.5746 0.125998 11.6845 0.0758934 11.8055C0.0257884 11.9264 0 12.0561 0 12.187C0 12.3179 0.0257884 12.4476 0.0758934 12.5686C0.125998 12.6895 0.199438 12.7994 0.29202 12.892C0.384602 12.9846 0.494513 13.058 0.615477 13.1081C0.736441 13.1583 0.86609 13.184 0.997021 13.184C1.12795 13.184 1.2576 13.1583 1.37856 13.1081C1.49953 13.058 1.60944 12.9846 1.70202 12.892L6.59202 8.00202L11.482 12.892C11.5746 12.9846 11.6845 13.058 11.8055 13.1081C11.9264 13.1583 12.0561 13.184 12.187 13.184C12.3179 13.184 12.4476 13.1583 12.5686 13.1081C12.6895 13.058 12.7994 12.9846 12.892 12.892C12.9846 12.7994 13.058 12.6895 13.1081 12.5686C13.1583 12.4476 13.184 12.3179 13.184 12.187C13.184 12.0561 13.1583 11.9264 13.1081 11.8055C13.058 11.6845 12.9846 11.5746 12.892 11.482L8.00202 6.59202L12.892 1.70202C13.272 1.32202 13.272 0.682021 12.892 0.302021Z" fill="white" />
                    </svg>
                </Button>
                <div className="comments-list comments-scrollable" >
                    {
                        comments.map(elm => <CommentCard key={elm._id} {...elm} />)
                    }
                </div>
                <div className="send-box ">
                    <Form.Group className='d-flex' controlId="validationCustom01 ">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Type..."
                            value={formData.value}
                            name="content"
                            onChange={handleInputChange}
                        />

                        <Button className='send-button' onClick={sendComment}>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.346025 0.245067C0.495293 0.1154 0.67965 0.032893 0.875797 0.00797416C1.07194 -0.0169447 1.27108 0.0168431 1.44802 0.105067L19.448 9.10507C19.6144 9.188 19.7544 9.31569 19.8523 9.47379C19.9501 9.63189 20.002 9.81414 20.002 10.0001C20.002 10.186 19.9501 10.3682 19.8523 10.5263C19.7544 10.6844 19.6144 10.8121 19.448 10.8951L1.44802 19.8951C1.27109 19.9836 1.07187 20.0177 0.87557 19.9929C0.679272 19.9682 0.494721 19.8858 0.345268 19.7562C0.195816 19.6265 0.0881803 19.4554 0.035981 19.2646C-0.0162183 19.0738 -0.0106349 18.8717 0.0520247 18.6841L2.61402 11.0001H8.00102C8.26624 11.0001 8.52059 10.8947 8.70813 10.7072C8.89567 10.5196 9.00102 10.2653 9.00102 10.0001C9.00102 9.73485 8.89567 9.4805 8.70813 9.29296C8.52059 9.10542 8.26624 9.00007 8.00102 9.00007H2.61402L0.0510245 1.31607C-0.0113122 1.12848 -0.0166539 0.926623 0.0356739 0.736C0.0880018 0.545377 0.196652 0.374539 0.346025 0.245067Z" fill="white" />
                            </svg>
                        </Button>

                    </Form.Group>

                </div>
            </div>
    )
}
export default CommentsList