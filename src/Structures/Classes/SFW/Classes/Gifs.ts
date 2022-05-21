interface Response {
    id: string;
    file: string;
    success: boolean;
    code: number;
    message: string;
};

import { FluxpointClient } from "../../../../FluxpointClient";

export class Gifs {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
        this.client = client;
    };

    public async getBaka(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/baka"
        });

        return request.file;
    };

    public async getBite(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/bite"
        });

        return request.file;
    };

    public async getBlush(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/blush"
        });

        return request.file;
    };

    public async getCry(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/cry"
        });

        return request.file;
    };

    public async getDance(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/dance"
        });

        return request.file;
    };

    public async getFeed(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/feed"
        });

        return request.file;
    };

    public async getFluff(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/fluff"
        });

        return request.file;
    };

    public async getGrabCheeks(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/grab"
        });

        return request.file;
    };

    public async getHandHolding(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/handhold"
        });

        return request.file;
    };

    public async getHighFive(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/highfive"
        });

        return request.file;
    };

    public async getHug(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/hug"
        });

        return request.file;
    };

    public async getKiss(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/kiss"
        });

        return request.file;
    };

    public async getLick(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/lick"
        });

        return request.file;
    };

    public async getPat(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/pat"
        });

        return request.file;
    };

    public async getPoke(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/poke"
        });

        return request.file;
    };

    public async getPunch(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/punch"
        });

        return request.file;
    };

    public async getShrug(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/shrug"
        });

        return request.file;

    };

    public async getSlap(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/slap"
        });

        return request.file;
    };

    public async getSmug(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/smug"
        });

        return request.file;
    };

    public async getStare(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/stare"
        });

        return request.file;

    };

    public async getTickle(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/tickle"
        });

        return request.file;
    };

    public async getWag(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/wag"
        });

        return request.file;
    };

    public async getWasted(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/wasted"
        });

        return request.file;
    };

    public async getWave(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/wave"
        });

        return request.file;
    };

    public async getWink(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/wink"
        });

        return request.file;
    };

};