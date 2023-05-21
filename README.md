https://fluxpointdev.github.io/fluxpoint-js/


# JavaScript
```js
const { FluxpointClient } = require("fluxpoint-js");
const client = new FluxpointClient({
@ -20,4 +21,33 @@ const main = async () => {
main().catch((e) => {
  console.log(e);
});
```
# TypeScript
```ts
import { FluxpointClient, IErrorResponse } from "fluxpoint-js";
const client: FluxpointClient = new FluxpointClient({
  token: "token"
});

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
