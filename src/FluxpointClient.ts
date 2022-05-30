import { SFW } from "./structures/classes/sfw/index";
import { Request } from "./structures/request/Request";
import { Misc } from "./structures/classes/extra/Misc";
import { NSFW } from "./structures/classes/nsfw";


export class FluxpointClient {
    public token: string;
    public request: Request;
    public sfw: SFW;
    public nsfw: NSFW;
    public misc: Misc;
    constructor(options = {
        token: null as unknown as string,
    }) {
        this.token = options.token;
        this.request = new Request(this.token);
        this.sfw = new SFW(this);
        this.misc = new Misc(this);
        this.nsfw = new NSFW(this);
    };
};