const express=require('express');
const bodyparser=require('body-parser');

const {PORT}=require('./config/Serverconfig');
const EmailService = require('./services/email-service');


const setupAndStartServer=()=>{
    const app=express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`);

    });
}

setupAndStartServer();
