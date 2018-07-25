module.exports={
    getPosts:(request,response)=>{
        response.status(200).send(request.blogs.posts)
    },
    addPost:(request,response)=>{
        let id=request.blogs.posts.length
        request.blogs.posts.push(request.body)
        response.status(201).send({id:id})
    },
    updatePost:(request,response)=>{
        let index=request.params.postID
        request.blogs.posts[index]=request.body
        response.status(200).send(request.blogs.posts[index])
    },
    removePost:(request,response)=>{
        request.blogs.posts.splice(request.params.postID,1)
        response.status(204).send('Post seccessfully deleted')
    }
}

// In-Memory data structure to store blogs
// var blogs={
//     posts:[{
//         "title":"title of the blog post",
//         "content":"blog content goes here",
//         "comments":["comment-1","comment-2"]
//     }]
// }