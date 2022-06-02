interface Response {
    id: string;
    file: string;
    success: boolean;
    code: number;
    message: string;
};

import { FluxpointClient } from "../../../../FluxpointClient";

export class Images {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
        this.client = client;
    };

    public async getNeko(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/neko",
        });

        return request;
    };

    public async getFox(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/kitsune"
        });

        return request;
    };

    public async getHolo(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/holo"
        });

        return request;
    };

    public async getChristmas(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/christmas"
        });

        return request;
    };

    public async getMaid(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/maid"
        });

        return request;
    };

    public async getNekoPara(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/nekopara"
        });

        return request;
    };

    public async getAzurlane(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/azurlane"
        });

        return request;
    };

    public async getSenko(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/senko"
        });

        return request;
    };

    public async getDDLC(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/ddlc"
        });

        return request;
    };

    public async getWallpaper(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/wallpaper"
        });

        return request;
    };

    public async getRandomAnime(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/anime"
        });

        return request;
    };

    public async getMeme(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/meme"
        });

        return request;
    };

    public async getNoU(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/nou"
        });

        return request;
    };

    public async getPog(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/pog"
        });

        return request;
    };

    public async getCat(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/cat"
        });

        return request;
    };

    public async getDog(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/dog"
        });

        return request;
    };

    public async getLizard(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/lizard"
        });

        return request;
    };
};