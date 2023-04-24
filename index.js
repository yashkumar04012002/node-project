const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.set('view engine', 'ejs')

const db = 'mongodb://127.0.0.1:27017/url-shortener'

mongoose
    .connect(db, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database connection error : '+err))


app.use('/', require('./routes/url'))

app.listen(7000, () => console.log('Server is running on PORT 5000'))
