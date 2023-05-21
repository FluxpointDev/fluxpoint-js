import { FluxpointClient, IResponse, IErrorResponse } from "fluxpoint-js";

const client: FluxpointClient = new FluxpointClient();

const main: Function = async () => {
  console.log(await client.sfw.gifs.getNeko());
};

main().catch((e: IErrorResponse) => {
  console.log(e);
});
