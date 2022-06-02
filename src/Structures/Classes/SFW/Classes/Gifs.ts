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

        return request;
    };

    public async getBite(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/bite"
        });

        return request;
    };

    public async getBlush(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/blush"
        });

        return request;
    };

    public async getCry(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/cry"
        });

        return request;
    };

    public async getDance(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/dance"
        });

        return request;
    };

    public async getFeed(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/feed"
        });

        return request;
    };

    public async getFluff(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/fluff"
        });

        return request;
    };

    public async getGrabCheeks(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/grab"
        });

        return request;
    };

    public async getHandHolding(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/handhold"
        });

        return request;
    };

    public async getHighFive(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/highfive"
        });

        return request;
    };

    public async getHug(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/hug"
        });

        return request;
    };

    public async getKiss(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/kiss"
        });

        return request;
    };

    public async getLick(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/lick"
        });

        return request;
    };

    public async getPat(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/pat"
        });

        return request;
    };

    public async getPoke(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/poke"
        });

        return request;
    };

    public async getPunch(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/punch"
        });

        return request;
    };

    public async getShrug(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/shrug"
        });

        return request;

    };

    public async getSlap(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/slap"
        });

        return request;
    };

    public async getSmug(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/smug"
        });

        return request;
    };

    public async getStare(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/stare"
        });

        return request;

    };

    public async getTickle(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/tickle"
        });

        return request;
    };

    public async getWag(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/wag"
        });

        return request;
    };

    public async getWasted(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/wasted"
        });

        return request;
    };

    public async getWave(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/wave"
        });

        return request;
    };

    public async getWink(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/gif/wink"
        });

        return request;
    };

};