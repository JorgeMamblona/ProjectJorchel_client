import './CommentCard.css'

import { useEffect } from 'react'

import { formatHours } from '../../utils/formatHours'

import { prettyDate } from '../../utils/prettyDate'

const CommentCard = ({ content, owner, updatedAt }) => {

    console.log(owner)
    useEffect(() => {
    }, [])



    return (
        <div className="comment-section d-flex">

            <div className="comment-avatar-container">
                <img src={owner.image} />
            </div>
            <div className="comment-container">

                <p><b>{owner.username}</b></p>
                <p>{content}</p>

                <p className='date'>{prettyDate(updatedAt)} <b>{formatHours(updatedAt)}</b></p>



            </div>



        </div>

    )
}

export default CommentCard