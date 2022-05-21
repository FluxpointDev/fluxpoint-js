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

        return request.file;
    };

    public async getCum(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/cum"
        });

        return request.file;
    };

    public async getBlowjob(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/blowjob"
        });

        return request.file;
    };

    public async getSoloGirl(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/solo"
        });

        return request.file;
    };

    public async getNeko(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/neko"
        });

        return request.file;
    };

    public async getBoobs(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/boobs"
        });

        return request.file;
    };

    public async getAnal(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/anal"
        });

        return request.file;
    };

    public async getPussy(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/pussy"
        });

        return request.file;
    };

    public async getYuri(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/yuri"
        });

        return request.file;
    };

    public async getBDSM(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/bdsm"
        });

        return request.file;
    };

    public async getFuta(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/futa"
        });

        return request.file;
    };

    public async getHentai(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/hentai"
        });

        return request.file;
    };

    public async getSpank(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/spank"
        });

        return request.file;
    };

    public async getAss(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/ass"
        });

        return request.file;
    };

    public async getKitsune(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/kitsune"
        });

        return request.file;
    };

    public async getFemdom(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/gif/femdom"
        });

        return request.file;
    };
};