import { FluxpointClient } from "../../../FluxpointClient";
import { Gifs } from "./Classes/Gifs";
import { Images } from "./Classes/Images";


export class NSFW {
    private client: FluxpointClient;
    public images: Images;
    public gifs: Gifs;
    constructor(client: FluxpointClient) {
        this.client = client;
        this.images = new Images(client);
        this.gifs = new Gifs(client);
    };
};