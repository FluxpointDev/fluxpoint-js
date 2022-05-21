# fluxpoint-js

Fluxpoint-JS is the offical Fluxpoint api library built for the fluxpoint api!
https://fluxpoint.dev

## Docs
https://fluxpointdev.github.io/fluxpoint-js/


```js
const { FluxpointClient } = require('fluxpoint-js');
const client = new FluxpointClient({
    token: 'token'
});

const main = async () => {
    console.log(await client.sfw.images.getNeko());
}; 

main().catch((e) => {
    console.log(e)
});
```