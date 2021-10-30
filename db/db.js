const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://faizanali:databasepassword@cluster0.dybre.mongodb.net/portfoliodb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  }).then(()=>console.log("Database connected!")).catch((err)=>console.log((err) + ' ' + 'Could not connect to database!'))