const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://srinivasareddy1409:srinu1409@book-store.54qqvag.mongodb.net/books-collection?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})