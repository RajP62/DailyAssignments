const express = require('express');
const app = express();
let booksObj = require('./books.json');
let {books} = booksObj;
app.use(express.json());
app.use(nameToRes);

function nameToRes(req,res,next){
    // This is middleware function
    req.resToSend = {api_requested_by: "Rajesh"};
    next();
}

app.get('/',(req,res)=>{
    let resWithRequester = req.resToSend;
    resWithRequester.books = books;
    res.send(resWithRequester);
});

app.post('/books',(req,res)=>{
    books.push(req.body);
    let resWithRequester = req.resToSend;
    resWithRequester.books = books;
    res.send(resWithRequester);
});

app.get('/books/:id',(req,res)=>{
    let book = books.filter((elem)=>elem.id===+req.params.id);
    let resWithRequester = req.resToSend;
    resWithRequester.book = book;
    res.send(resWithRequester);
});

app.patch('/books/:id',(req,res)=>{
    let resWithRequester = req.resToSend;
    books.forEach(element => {
        if(element.id===+req.params.id){
            if(req?.body?.author) element.author = req.body.author;
            if(req?.body?.bookName) element.bookName = req.body.bookName;
            if(req?.body?.pages) element.pages = req.body.pages;
            if(req?.body?.publishedYear) element.publishedYear = req.body.publishedYear;
            // res.send(element);  
            resWithRequester.book = element;
        }
    });
    res.send(resWithRequester);
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
        books.splice(elem,1);
    }
    console.log(books)
    let resWithRequester = req.resToSend;
    resWithRequester.books = books;
    res.send(resWithRequester);
})



app.listen(2000,()=>{
    console.log("Server is running on port number 2000");
});