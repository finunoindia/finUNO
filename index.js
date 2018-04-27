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

//const pg = require('pg');

restService.use(bodyParser.urlencoded({                           
    extended: true
}));

//var scrips = require("./Equity_final.json");

restService.use(bodyParser.json());

restService.post('/finUNO', function(req, res) {                      // Uses post() to get data from api.ai in json format
     
    const { Client } = require('pg')
    const client = new Client({
        user: 'zefakwazdlcsvl',
        host: 'ec2-54-221-207-184.compute-1.amazonaws.com',
        database: 'd8uvjfn9ba627d',
        password: '0eab1c16cd07430aeb4d3960e5d1268f951f1be9c76c7a2e3ad4ac517b094055',
        port: 5432
    })
    
    
    var scrips = {};
    
    client.connect()

 client.query('SELECT * FROM Equity', (err, res) => {
     scrips = res;
     console.log(scrips);
     client.end()
})
    
/*
await client.connect()

//const res = await client.query('SELECT NOW() as now', ['Hello world!'])
const res = client.query('SELECT NOW() as now')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))
console.log(res) // Hello world!
await client.end()
 */ 
    
    /*
 var connectionString = "postgres://zefakwazdlcsvl:0eab1c16cd07430aeb4d3960e5d1268f951f1be9c76c7a2e3ad4ac517b094055@ec2-54-221-207-184.compute-1.amazonaws.com:5432/d8uvjfn9ba627d"
 client.connect(connectionString, function(client, done) {
   client.query('SELECT NOW()', (err, res) => {
        console.log(err, res);
        pool.end();
   });*/
      //if(err) return console.error(err);
      //console.log(result.rows[0]);
       
       return res.json({
                    contextOut : [{
                        name : "tradecontextout",
                        parameters : {
                            scripnames : "DB Test"
                        }
                    }],
                    speech : "DB Test",
                    displayText : "DB Test"
                });
   });
    
    restService.listen((process.env.PORT || 8000), function() {
     console.log("Server up and listening");
     });
//server.timeout = 1000;
