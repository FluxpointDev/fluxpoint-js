import { FluxpointClient } from "../../../FluxpointClient";
import { Gifs } from "./Classes/Gifs";
import { Images } from "./Classes/Images";
import { Welcome } from "./Classes/Welcome";
export * from "./Classes/Gifs";
export * from "./Classes/Images";


export class SFW {
    private client: FluxpointClient;
    public images: Images;
    public gifs: Gifs;
    constructor(client: FluxpointClient) {
        this.client = client;
        this.images = new Images(client);
        this.gifs = new Gifs(client);
    };
};