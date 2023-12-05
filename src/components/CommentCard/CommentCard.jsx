import './CommentCard.css'

import { useEffect } from 'react'

const CommentCard = ({ content, owner, updatedAt }) => {


    useEffect(() => {
    }, [])



    return (
        <div className="comment-container">
            <div className="comment-header d-flex">
                <p>{content}</p>
                <p>{owner}</p>
            </div>
            <div className="comment-body">
                <p>{updatedAt}</p>
            </div>
        </div>
    )
}

export default CommentCard