//This is a test file to test the API
const config = require('./config');
const ImageGen = require('./index').ImageGen;
const fs = require('fs');
const axios = require('axios');

console.log(ImageGen);

//initialize api
const fluxapi = new ImageGen(config.apikey);
this.fluxapi = fluxapi;
this.fs = fs;
async function testimgae(context) {
    //test image
    const testimage = await context.fluxapi.getTestImage();
    if (testimage != null) {
        context.fs.writeFile('./test/testImage.jpg', testimage, (err) => {
            if (err) console.log(err);
            console.log('Success write test image!');
        });
    } else {
        //we didn't get the image due to an error, check your key and try again.
        console.log('we didn\'t get the image due to an error, check your key and try again.');
    }
}
testimgae(this);

//https://stuff.firegamer3.net/GoKTO3yan
async function testWelcome(context) {
    const builder = new context.fluxapi.WelcomeBuilder("FireGamer3#0000", "https://stuff.firegamer3.net/GoKTO3yan", "#aaaaaa", "Member #1337");
    builder.setIcon(builder.types.icons.dog);
    builder.setBanner(builder.types.banners.space);

    const testimage = await context.fluxapi.getWelcomeImage(builder.buildBody());
    if (testimage != null) {
        context.fs.writeFile('./test/testWelcome1.jpg', testimage, (err) => {
            if (err) console.log(err);
            console.log('Success write test image!');
        });
    } else {
        //we didn't get the image due to an error, check your key and try again.
        console.log('we didn\'t get the image due to an error, check your key and try again.');
    }
}
testWelcome(this);