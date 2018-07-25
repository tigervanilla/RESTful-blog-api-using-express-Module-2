module.exports={
    getComments:(request,response)=>{
        let postIndex=request.params.postID
        response.status(200).send(request.blogs.posts[postIndex].comments)
    },
    addComment:(request,response)=>{
        let postIndex=request.params.postID
        let newComment=request.body.comment
        if(request.blogs.posts[postIndex].comments!==undefined){
            request.blogs.posts[postIndex].comments.push(newComment)
        }
        else{
            request.blogs.posts[postIndex].comments=[newComment]
        }
        response.status(201).send(request.blogs.posts[postIndex].comments)
    },
    updateComment:(request,response)=>{
        let postIndex=request.params.postID
        let commentIndex=request.params.commentID
        let newComment=request.body.comment
        request.blogs.posts[postIndex].comments[commentIndex]=newComment
        response.status(200).send(request.blogs.posts[postIndex].comments)
    },
    removeComment:(request,response)=>{
        let postIndex=request.params.postID
        let commentIndex=request.params.commentID
        request.blogs.posts[postIndex].comments.splice(commentIndex,1)
        response.status(204).send('Comment deleted successfully')
    }
}

// In-Memory data structure to store blogs
// let blogs={
//     posts:[{
//         "title":"title of the blog post",
//         "content":"blog content goes here",
//         "comments":["comment-1","comment-2"]
//     }]
// }