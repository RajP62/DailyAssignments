const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const mongo = async ()=>{
    return mongoose.connect("mongodb+srv://raj4151999:raj4151999@cluster0.myaaa.mongodb.net/MoviesApp");
}

const movieSchema = new mongoose.Schema({
    movie_name: {type:String, required: true},
    movie_genre: {type:String, required: true},
    production_year: {type:Number, required: true},
    budget : {type:Number, required: true}
});

const movie = mongoose.model("movie",movieSchema);

app.get('/movies', async (req,res)=>{
    let movies = await movie.find().lean().exec();
    res.send(movies);
})

app.post('/addMovie', async (req,res)=>{
    try{
        const mov = await movie.create(req.body);
        res.send(mov);
    }
    catch(e){
        res.send(e);
    }
});

app.get('/movie/:id',async (req,res)=>{
    try{
        let mov = await movie.findById(req.params.id).lean().exec();
        res.send(mov);
    }
    catch(e){
        res.send(e);
    }
});

app.patch('/movie/:id',async (req,res)=>{
    try{
        let mov = await movie.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.send(mov);
    }
    catch(e){
        res.status(500).send(e);
    }
});

app.delete('/movie/:id', async (req,res)=>{
    try{
        const mov = await movie.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(mov)
    }
    catch(e){
        console.log(e);
        return res.send(e);
    }
});

// app.post('/movie')
app.listen(2000,async ()=>{
    await mongo();
    console.log("Server is running on port 2000");
})