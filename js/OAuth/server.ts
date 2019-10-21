//const express = require('express');
import express from 'express'

const app = express();
//const bodyParser = require('body-parser');
import bodyParser from 'body-parser';

require('module-alias/register')
import 'reflect-metadata';
import './database/typeorm';

//const setPassport = require('./config/passport');
import setPassport from './config/passport';
const setRoutes = require('./routes')

app.use((req,res,next)=>{
    //console.log('req ',req.url, req.originalUrl, req.rawHeaders)

    next();
})

app.use(bodyParser.json());
setPassport();
setRoutes(app)

app.listen(3000, () => {
    console.log('running...')
});