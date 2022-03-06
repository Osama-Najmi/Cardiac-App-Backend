const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient
const app = express()

const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())
var database

app.get('/api/cardiac-services',(req, res) => {
    
    database.collection('users').find({}).toArray((err, result) => {
        if(err) throw error

        const response = {
            count: result.length,
            data: result
        }

        res.send(response)
    })
})
app.listen(port, () => {
    mongoClient.connect('mongodb+srv://osamanajmi:Osama123@cluster0.povxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true}, (error, result) => {
        if(error) throw error
        database = result.db('Cardiac')
        console.log('success')
    })
});
