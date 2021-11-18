const express = require('express');
const app = express();
let books = require('./books.json');
app.use(express.json());


app.get('/',(req,res)=>{
    res.send(books);
});

app.post('/books',(req,res)=>{
    books.push(req.body);
    console.log(books)
    res.send(books);
});

app.get('/books/:id',(req,res)=>{
    let book = books.filter((elem)=>elem.id===+req.params.id);
    res.send(book);
});

app.patch('/books/:id',(req,res)=>{
    books.forEach(element => {
        if(element.id===+req.params.id){
            if(req?.body?.author) element.author = req.body.author;
            if(req?.body?.bookName) element.bookName = req.body.bookName;
            if(req?.body?.pages) element.pages = req.body.pages;
            if(req?.body?.publishedYear) element.publishedYear = req.body.publishedYear;

            res.send(element);  
        }
              
    });
});

app.delete('/books/:id',(req, res)=>{
    let elem = "";
    for(let i=0; i<books.length; i++){
        let curr = books[i];
        if(curr.id===+req.params.id){
            elem = i;
            break;
        }
    }

    if(elem){
        let deletedElem = books.splice(elem,1);
        res.send(deletedElem[0]);
    }
    console.log(books);
})



app.listen(2000,()=>{
    console.log("Server is running on port number 2000");
});