import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import postDb from './dBmodel.js'; 

const app = express();
const port = process.env.PORT;

//Middleware

app.use(cors());
app.use(express.json());

//APIs
app.get('/', (req, res) => {
    res.status(200).send('Hello!')
})

app.post('/uploadImage', (req,res) => {
    const userData = req.body;
    postDb.create(userData, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/sync', (req, res) => {
    postDb.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})


//DB congig
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Database connected')
})


app.listen(port, () => {console.log(`Listening on ${port}`)});


