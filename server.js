import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbcards.js'
import Cors from 'cors'

// App Config

const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://emran2602:fDxxmv7xXtkh5kqO@cluster0.yxu432z.mongodb.net/?retryWrites=true&w=majority'


// MiddleWares
app.use(express.json());
app.use(Cors());

// DB Config

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// API Endpoints
app.get('/', (req,res) => res.status(200).send('Hello World'));

app.post('/tinder/card', (req,res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/card', (req,res) =>{
    Cards.find((err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })

})

// Listener
app.listen(port, () => console.log(`listening on localhost ${port}`));