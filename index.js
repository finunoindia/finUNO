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
        user: 'pxcslocnxfinsb',
        host: 'ec2-54-243-63-13.compute-1.amazonaws.com',
        database: 'daie0h3kmaiqve',
        password: 'b407c9d48f3702a3e57f7900dd8e7a601f8f9fda4f6db1254994adf90a163ea8',
        port: 5432
    })
    // ORDER BY Difference(FIELD1,'"+random+"') DESC
    // WHERE FIELD1 LIKE \'%"+random+"\'%'
    var random = "infosys"
    var scrips = {};
    
    client.connect()

 //client.query('Select * From Equity', (err, res) => {
 res = client.query('Select * from Equity');
     scrips = JSON.stringify(res);
     scrips = JSON.parse(scrips);
     scrips = scrips.rows;
     //console.log(scrips);
     //scrips = JSON.stringify(res);
     //scrips = JSON.parse(scrips);
     //scrips = scrips.rows;
     //console.log(scrips[0].FIELD1);
     client.end()
//})
    
  console.log(scrips[0]);
       
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
