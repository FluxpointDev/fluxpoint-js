interface Response {
    id: string;
    Name: string;
    Token: string;
    Created: string;
    Disabled: boolean;
    status: string;
    code: number;
    message: string;
};

import { FluxpointClient } from "../../../FluxpointClient";
import fetch from "cross-fetch";

export class Misc {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
        this.client = client;
    };

    public async Me(): Promise<Response> {
        if (!this.client.token) {
            return Promise.reject('[fluxpoint-js] No token provided');
        };

        const request = fetch('https://api.fluxpoint.dev/me', {
            method: "GET",
            headers: {
                Authorization: `${this.client.token}`
            }
        });

        return request.then((x) => {
            return x.json();
        });
    };
};