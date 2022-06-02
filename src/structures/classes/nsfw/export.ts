import { FluxpointClient } from "../../../FluxpointClient";
import { Gifs } from "./classes/Gifs";
import { Images } from "./classes/Images";


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