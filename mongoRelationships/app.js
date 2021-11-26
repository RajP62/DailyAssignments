const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());


const connect = async ()=>{
    return await mongoose.connect('mongodb://127.0.0.1:27017/Library');
}

const UserSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String, required:true},
    gender:{type:String, required: true}
},{versionKey:false, timestamps:true})

const User = mongoose.model("user",UserSchema);

const SectionSchema = new mongoose.Schema({
    section_name: {type:String, required:true}
},{versionKey:false, timestamps:true});

const Section = mongoose.model("section",SectionSchema);

const booksSchema = new mongoose.Schema({
    book_name:{type:String, required: true},
    body:{type:String, required: true},
    section_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true
    },
    author_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required:true
    }],
    checked_by_user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
},{versionKey:false, timestamps:true});

const Book = new mongoose.model("books",booksSchema);

const authorSchema = new mongoose.Schema({
    first_name:{type: String, required: true},
    last_name:{type:String, required: true},
},{versionKey:false, timestamps:true});

const Author = mongoose.model("author",authorSchema);


app.get('/users', async(req,res)=>{
    try{
        const user = await User.find().lean().exec();
        res.send(user);
    }
    catch(e){
        res.status(500).send(e);
    }
})
app.post('/users/add',async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.send(user);
    }
    catch(e){
        res.status(500).send(e);
    }
});


app.post('/section/add', async(req, res)=>{
    try{
        const section = await Section.create(req.body);
        res.send(section);
    }
    catch(e){
        res.status(500).send(e);
    }
    
});

app.post('/authors/add', async(req,res)=>{
    try{
        const author = await Author.create(req.body);
        res.send(author);
    }
    catch(e){
        res.status(500).send(e);
    }
});

app.post('/books/add', async(req,res)=>{
    try{
        const book = await Book.create(req.body);
        res.send(book);
    }
    catch(e){
        res.send(e);
    }
});

app.get('/books/checked', async(req,res)=>{
    try{
        const checked = await Book.find({checked_by_user:{$exists:true}}).populate("section_id").populate("author_id").populate("checked_by_user").lean().exec();
        res.send(checked);
    }
    catch(e){
        res.status(500).send(e);
    }
});

app.get('/books/:writtenBy', async(req,res)=>{
    console.log(req.params.writtenBy)
    try{
        const books = await Book.find().populate("author_id").lean().exec();
        const book = [];
        const books_match = books.filter((el)=> {for(let i=0; i<el.author_id.length; i++){
            if(el.author_id[i].first_name+" "+el.author_id[i].last_name===req.params.writtenBy){
                book.push(el);
            }
        }
        })
        res.send(book);
    }
    catch(e){
        res.status(500).send(e);
    }
});

app.get('/books/get/:section', async(req,res)=>{
    try{
        const books = await Book.find({section_id:{$eq: req.params.section}}).populate("section_id").lean().exec();
        
        res.send(books);
    }
    catch(e){
        res.send(e);
    }
});


// Books that are not checked out and matches a specific id 
app.get('/books/get/:section/checkednot',async (req,res)=>{
    try{
        const books = await Book.find({section_id:{$eq: req.params.section},checked_by_user:{$exists:false}});
        res.send(books);
    }
    catch(e){
        res.status(500).send(e);
    }
});

// Books that belongs to specific section and written by an author given
app.get('/books/get/:section/:author', async(req,res)=>{
    try{
        const books = await Book.find({section_id:{$eq: req.params.section}, author_id:{$eq: req.params.author}}).populate("author_id").populate("section_id").lean().exec();
        res.send(books);
    }
    catch(e){
        res.status(500).send(e);
    }
})

app.listen(2000,async ()=>{
    await connect();
    console.log("Server is running on port 2000");
});



