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

    public async getFeet(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/feet"
        });

        return request;
    };

    public async getCum(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/cum"
        });

        return request;
    };

    public async getBlowjob(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/blowjob"
        });

        return request;
    };

    public async getSoloGirl(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/solo"
        });

        return request;
    };

    public async getNeko(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/neko"
        });

        return request;
    };

    public async getBoobs(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/boobs"
        });

        return request;
    };

    public async getAnal(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/anal"
        });

        return request;
    };

    public async getPussy(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/pussy"
        });

        return request;
    };

    public async getYuri(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/yuri"
        });

        return request;
    };

    public async getBDSM(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/bdsm"
        });

        return request;
    };

    public async getFuta(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/futa"
        });

        return request;
    };

    public async getHentai(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/hentai"
        });

        return request;
    };

    public async getSpank(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/spank"
        });

        return request;
    };

    public async getAss(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/ass"
        });

        return request;
    };

    public async getKitsune(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/kitsune"
        });

        return request;
    };

    public async getFemdom(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/femdom"
        });

        return request;
    };
};