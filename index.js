const express = require('express');
const app = express();
const mongoose= require('mongoose');
const router = require('./messagesRouter');

const port = process.env.PORT? process.env.PORT : 8000;

const url = process.env.MONGOURL;

mongoose.connect(url,{ useNewUrlParser: true });
const connection= mongoose.connection;
app.use(express.json());

try{
    connection.on('open',() => { console.log('connected'); });
} catch(error) {
    console.log(error);
}

app.use('/messages', router);

app.listen(port, () => {
    console.log(`Aplicación ejecutándose en el puerto ${port}`)
});