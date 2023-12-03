import { useEffect, useState } from "react"
import commentService from "../../services/comment.services"
import CommentCard from "../CommentCard/CommentCard"

const CommentsList = ({ parent }) => {

    const [comments, setComments] = useState()


    useEffect(() => {
        loadCommnents()
    }, [])

    const loadCommnents = () => {

        commentService
            .getParentComments(parent)
            .then(({ data }) => setComments(data))
            .catch(err => console.log(err))
    }

    return (
        !comments
            ?
            <></>
            :
            <div>
                {
                    comments.map(elm => <CommentCard key={elm._id} {...elm} />)
                }
            </div>
    )
}
export default CommentsList