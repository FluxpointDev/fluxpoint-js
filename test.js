//This is a test file to test the API
const config = require('./config');
const fluxpoint = require('./index');
const fs = require('fs');
const axios = require('axios');
var { Base64Decode } = require('base64-stream');


//initialize api
const fluxapi = new fluxpoint(config.apikey);
this.fluxapi = fluxapi;
this.fs = fs;
async function testimgae(context) {
    //test image
    const testimage = await context.fluxapi.ImageGen.getTestImage();
    var final = Buffer.from(testimage, 'base64')
    context.fs.writeFile('./test/testImage.jpg', final, (err) => {
        if (err) console.log(err);
        console.log('Success write test image!');
    })
}
testimgae(this);