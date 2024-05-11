export const updateComments = (comments, targetId, newComment) => {
    const commentCopy = JSON.parse(JSON.stringify(comments));

    for(const comment of commentCopy){
        if(comment.id == targetId){
            comment.subComments.push({
                id: new Date().getTime(),
                comment: newComment,
                subComments: [],
            })
        }

        if(comment.subComments.length > 0){
            comment.subComments = updateComments(comment.subComments, targetId, newComment);
        }
    }
    return commentCopy;
}