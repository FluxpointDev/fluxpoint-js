# fluxpoint-js

JS library for the Fluxpoint API
Docs: https://docs.fluxpoint.dev/api/my-api

## Getting Started

The following code will get you started

```js
const ImageGen = require('./index').ImageGen;
const fs = require('fs');

//initialize api
const fluxapi = new ImageGen("YOUR API KEY");
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
```

Please refer to test.js to see this example and more.
