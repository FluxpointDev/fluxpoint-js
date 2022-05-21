interface BuildWelcomeOptions {
    username: string;
    avatar: string;
    background: string;
    members?: string;
    icon?: string;
    banner?: string;
    color_welcome?: string;
    color_username?: string;
    color_members?: string;
}

import { FluxpointClient } from "../../../../FluxpointClient";

export class Welcome {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
        this.client = client;
    };
}