import React from 'react'
import Comment from './Comment';

const Comments = ({ comments, addReply }) => {
  return (
    <>
        {comments.map(comment => (
                <Comment comment={comment} key={comment.id} addReply={addReply} />
            
        ))}
        </>
  )
}

export default Comments;