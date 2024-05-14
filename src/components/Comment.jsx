import React, { useState } from 'react'
import Comments from './CommentLayout'
import { motion, AnimatePresence } from "framer-motion";

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
        <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: showComments ? "#FF0088" : "#0055FF" }}
        onClick={() => toggleComments(!showComments)}
      />
      <AnimatePresence initial={false}>
        {showComments && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
              <Comments comments={comment.subComments} addReply={addReply} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
        {showReply && <motion.input initial={{ width: "0vw", x: "50vw" }}
    animate={{ width: "50vw", x: 0 }}
    transition={{ duration: 1, origin: 1 }}
     onBlur={() => toggleReply(!showReply)}
      type='text' 
      placeholder='Reply with your comments'
       className='border-2 border-blue-400 p-2 rounded bg-gray-200' 
       autoFocus 
       onKeyDown={handleKeyDown}/>}
    </div>
  )
}

export default Comment;