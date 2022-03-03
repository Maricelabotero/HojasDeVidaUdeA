const json = require('express');
const express = require('express');
const index = express();

index.set('view engine', 'ejs');

index.use(express.urlencoded({extended:false}));
index.use(express(json));

index.use('/', require('./router'));

index.listen(3000, ()=>{
    console.log('Servidor corriendo en http://localhost:3000');
});
