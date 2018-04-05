'use strict';
//require("require.async")(require);
//const async = require("async");
/*require("require.async")(require);

require.async("./package.json", function() {
    console.log("async working!!");
})*/
const express = require('express');                                // Used to access express
const bodyParser = require('body-parser');                         // Ussed too access the body-parser

const restService = express();

const fs = require('fs');

const request = require('request');

restService.use(bodyParser.urlencoded({                           
    extended: true
}));

//var scrips = require("./Equity_final.json");

restService.use(bodyParser.json());

restService.post('/finUNO', function(req, res) {                      // Uses post() to get data from api.ai in json format
     
    const { Client } = require('pg')
    const client = new Client()

await client.connect()

//const res = await client.query('SELECT NOW() as now', ['Hello world!'])
const res = client.query('SELECT NOW() as now')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))
console.log(res) // Hello world!
await client.end()
    
    
};
    restService.listen((process.env.PORT || 8000), function() {
     console.log("Server up and listening");
     });
//server.timeout = 1000;
