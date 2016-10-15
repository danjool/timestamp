var express = require('express');
var app = express();

app.get('/', (req, res)=>{
   res.send('hello world'); 
});

app.listen(process.env.PORT, function(){
   console.log('server listening on ' + process.env.PORT ); 
});

/*
https://fcc-api-danjool.c9users.io/
*/