# fluxpoint-js

Fluxpoint-JS is the offical Fluxpoint JavaScript api library built for the fluxpoint api!
https://fluxpoint.dev

## Docs
https://fluxpointdev.github.io/fluxpoint-js/

# JavaScript
```js
const { FluxpointClient } = require("fluxpoint-js");
const client = new FluxpointClient({
  token: "token",
});

const main = async () => {
  console.log(await client.sfw.images.getNeko());
};

main().catch((e) => {
  console.log(e);
});
```
# TypeScript
```ts
import { FluxpointClient, IResponse, IErrorResponse } from "fluxpoint-js";

const client: FluxpointClient = new FluxpointClient();

const main: Function = async () => {
  console.log(await client.sfw.gifs.getNeko());
};

main().catch((e: IErrorResponse) => {
  console.log(e);
});
```
# CoffeeScript
```coffee
{ FluxpointClient } = require "fluxpoint-js";
client = new FluxpointClient({
    token: "token"
});

main = () ->
     console.log await client.sfw.gifs.getNeko();


main().catch (e) ->
     console.log e
```