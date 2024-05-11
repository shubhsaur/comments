import { useState } from 'react'
import Comments from './components/CommentLayout'
import { comments } from './data/commentsData'
import { updateComments } from './utils/helper';

function App() {
  const [updatedComments, setUpatedComments] = useState(comments);

  const addReply = (targetId, newComment) => {
    const newUpdatedComment = updateComments(updatedComments, targetId, newComment);
    setUpatedComments(newUpdatedComment);
  }
  return (
    <div className='bg-[#102C57] flex flex-col justify-between items-center py-8'>
    <h1 className='text-center text-5xl mt-4 mb-16 text-white'>Comments</h1>
    <Comments comments={updatedComments} addReply={addReply} />
    </div>
  )
}

export default App
