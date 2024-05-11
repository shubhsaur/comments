import React, { useState } from 'react'
import Comments from './CommentLayout'

const Comment = ({ comment, addReply }) => {
    const [showComments, toggleComments] = useState(false);
    const [showReply, toggleReply] = useState(false);

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' || e.keyId === 13){
            const newComment = e.target.value;
            console.log(newComment)
            addReply(comment.id, newComment);
            toggleComments(true);
            toggleReply(false);
        }
    }
  return (
    <div className='flex flex-col p-2 gap-2 bg-[#FEFAF6] rounded mt-4 w-[100%] border border-gray-800'>
        <div className='flex justify-between items-center w-[100%]'>
        <div className='text-lg p-3'>
            {comment.comment}
        </div>
        <div className='flex justify-between items-center gap-1'>
            <span onClick={() => toggleReply(!showReply)} className='text-sm bg-sky-300 p-1 rounded text-gray-800 cursor-pointer'>Reply</span>
            {comment.subComments.length > 0 && <span onClick={() => toggleComments(!showComments)} className='text-sm bg-orange-200 p-1 rounded text-gray-800 cursor-pointer'>{showComments ?`Hide` : `Show`} comments</span>}
        </div>
        </div>
        {showComments && <Comments comments={comment.subComments} addReply={addReply} />}
        {showReply && <input onBlur={() => toggleReply(!showReply)} type='text' placeholder='Reply with your comments' className='border-2 border-blue-400 p-2 rounded bg-gray-200' autoFocus onKeyDown={handleKeyDown}/>}
    </div>
  )
}

export default Comment;