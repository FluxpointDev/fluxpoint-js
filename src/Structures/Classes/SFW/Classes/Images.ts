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

        return request.file;
    };

    public async getFox(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/kitsune"
        });

        return request.file;
    };

    public async getHolo(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/holo"
        });

        return request.file;
    };

    public async getChristmas(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/christmas"
        });

        return request.file;
    };

    public async getMaid(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/maid"
        });

        return request.file;
    };

    public async getNekoPara(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/nekopara"
        });

        return request.file;
    };

    public async getAzurlane(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/azurlane"
        });

        return request.file;
    };

    public async getSenko(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/senko"
        });

        return request.file;
    };

    public async getDDLC(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/ddlc"
        });

        return request.file;
    };

    public async getWallpaper(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/wallpaper"
        });

        return request.file;
    };

    public async getRandomAnime(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/anime"
        });

        return request.file;
    };

    public async getMeme(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/meme"
        });

        return request.file;
    };

    public async getNoU(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/nou"
        });

        return request.file;
    };

    public async getPog(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/pog"
        });

        return request.file;
    };

    public async getCat(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/cat"
        });

        return request.file;
    };

    public async getDog(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/dog"
        });

        return request.file;
    };

    public async getLizard(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/sfw/img/lizard"
        });

        return request.file;
    };
};