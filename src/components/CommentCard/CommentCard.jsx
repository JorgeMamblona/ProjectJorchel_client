import { AuthContext } from "../../contexts/auth.context"

import './CommentCard.css'

import { useContext, useEffect, useState } from 'react'

import { formatHours } from '../../utils/formatHours'

import { prettyDate } from '../../utils/prettyDate'

const CommentCard = ({ content, owner, updatedAt }) => {


    const { loggedUser } = useContext(AuthContext)
    const [isOwner, setIsOwner] = useState(false)

    const checkOwner = (owner) => {
        setIsOwner(false)
        if (loggedUser._id === owner) {
            setIsOwner(true)
        }
    }

    useEffect(() => {
        checkOwner(owner._id)
    }, [])

    return (
        <div className="comment-section d-flex">

            {
                isOwner ? <></> : <div className="comment-avatar-container"><img src={owner.image} /></div>
            }
            <div className={`comment-container-Owner-${isOwner}`}>


                <p><b>{owner.username}</b></p>
                <p>{content}</p>

                <p className='date'>{prettyDate(updatedAt)} <b>{formatHours(updatedAt)}</b></p>

            </div>
            {
                isOwner ? <div className="comment-avatar-container"></div> : <></>
            }


        </div>

    )
}

export default CommentCard