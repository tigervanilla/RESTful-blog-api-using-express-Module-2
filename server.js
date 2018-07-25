const express=require('express')
const bodyParser=require('body-parser')
const logger=require('morgan')
// const errorHandler=require('error-handler')
const posts=require('./routes/posts')
const comments=require('./routes/comments')

// In-Memory data structure to store blogs
// let blogs={
//     posts:[{
//         "title":"title of the blog post",
//         "content":"blog content goes here",
//         "comments":["comment-1","comment-2"]
//     }]
// }

let blogs={
    posts:[]
}

let app=express()
app.use(bodyParser.json())
app.use(logger('dev'))
// app.use(errorHandler())
app.use((request,response,next)=>{
    request.blogs=blogs
    next()
})

app.get('/posts',posts.getPosts)
app.post('/posts',posts.addPost)
app.put('/posts/:postID',posts.updatePost)
app.delete('/posts/:postID',posts.removePost)

app.get('/posts/:postID/comments',comments.getComments)
app.post('/posts/:postID/comments',comments.addComment)
app.put('/posts/:postID/comments/:commentID',comments.updateComment)
app.delete('/posts/:postID/comments/:commentID',comments.removeComment)

app.listen(3000)