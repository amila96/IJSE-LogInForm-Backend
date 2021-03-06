const express= require('express');
const mongoose= require('mongoose');

//--------------------------------
const AdminUserRoute = require('./routes/AdminUserRoute');
//--------------------------------

const app = express();

mongoose.connect(
    'mongodb://127.0.0.1:27017/cmjd',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{
    app.listen(3000, ()=>{
        console.log('CMJD service Stared on port 3000');
    })
}).catch((error)=>{
    console.log(error);
});

//------------------------------
app.use('/api/v1/adminUserRoute', AdminUserRoute)
//------------------------------