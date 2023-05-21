{ FluxpointClient } = require "fluxpoint-js";
client = new FluxpointClient({
    token: "token"
});

main = () ->
     console.log await client.sfw.gifs.getNeko();


main().catch (e) ->
     console.log e