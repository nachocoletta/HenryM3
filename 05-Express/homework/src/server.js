// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;
let queryId = 0;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests

server.post('/posts', function(req, res){
    let {author, title, contents} = req.body;

    if(!author || !title || !contents){
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"})
    }
    let query = {id: queryId++, author, title, contents}

    posts.push(query);
    res.json(query);
})

server.post('/posts/author/:author', function(req, res){
    let {title, contents} = req.body;
    
    let author = req.params.author;
    if(!author || !title || !contents){
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"})
    }
    let queryId = 0;
    let query = {id: queryId++, author, title, contents}

    posts.push(query);
    res.json(query);
});

server.get('/posts', (req, res) => {
    // console.log(req);
    let term = req.query.term;
    if(!term){
        res.json(posts);
    }

    let name = posts.filter(p => p.title.includes(term) || p.contents.includes(term))
    
    return (name.length > 0 ? res.json(name) : res.json(posts))
    // if(name.length > 0){
    //     res.json(name)
    // }else
    // {
    //     res.json(posts)
    // }

});



server.get('/posts/:author', (req, res) => {
    // console.log(req);
    let authorUrl = req.params.author;

    let postGotten = posts.filter(p => p.author.includes(authorUrl));
    
    postGotten.length > 0 ? res.json(postGotten) : res.status(STATUS_USER_ERROR).json({error: "No existe ningun post del autor indicado"});
});

server.get('/posts/:author/:title', (req, res) => {
    let authorUrl = req.params.author;
    let titleUrl = req.params.title;
    
    let postGotten = posts.filter(p => p.author.includes(authorUrl) && p.title.includes(titleUrl));

    postGotten.length > 0 ? res.json(postGotten) : res.status(STATUS_USER_ERROR).json({error: "No existe ningun post con dicho titulo y autor indicado"})
});

server.put('/posts', (req, res) => {
    let {id, title, contents} = req.body;

    if(id && title && contents){
        let postGotten = posts.find(p => p.id === id);

        if(postGotten){
            postGotten.title = title; 
            postGotten.contents = contents;
            res.json(postGotten);
        }else{
            res.status(STATUS_USER_ERROR).json({error: "No existe el autor indicado"})

        }
    }else 
    {
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para modificar el Post"})
    }
});


server.delete('/posts', (req, res) => {
    let id = req.body.id;

    if(id){
        let postGotten = posts.find(p => p.id === id);
        
        if(postGotten){
            posts = posts.filter(p => p.id !== id);
            res.json({success: true});
        }else
        {
            res.status(STATUS_USER_ERROR).json({error: "Error porque me pinto"})
        }
    }else
    {
        res.status(STATUS_USER_ERROR).json({error: "Error porque me pinto"})
    }         
});

server.delete('/author', (req, res) => {
    let { author } = req.body;

    if (!author) {
        res.json({error: "Mensaje de error"})
    }

    let queryAuthor = posts.filter(post => post.author === author);
    if (queryAuthor.length > 0) {

        posts = posts.filter(p => p.author !== author)
        res.json(queryAuthor)

    }
        res.status(STATUS_USER_ERROR).json({ error: 'No existe el autor indicado' })
    
});

module.exports = { posts, server };
