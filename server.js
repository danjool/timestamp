var express = require('express');
var app = express();

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(200);
});

app.get('/:input', (req, res)=>{
    var input = req.params.input;
    var times = {unix:null,
    natural:null}
    
    var parsed = Date.parse( input );
    console.log( "input " + input);
    if ( !isNaN(parsed) )
    {
      times.natural = input;
      times.unix = parsed;
    } else {
        var date = new Date( Number(input) );
        times.natural = date.toDateString();
        times.unix = input
    } 
    
    res.send( times ); 
});

app.listen(process.env.PORT, function(){
   console.log('server listening on ' + process.env.PORT ); 
});

/*
https://fcc-api-danjool.c9users.io/
*/