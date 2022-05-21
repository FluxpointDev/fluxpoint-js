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

    public async getAzurLane(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/azurlane"
        });

        return request.file;
    };

    public async getFeet(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/feet"
        });

        return request.file;
    };

    public async getCum(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/cum"
        });

        return request.file;
    };

    public async getBlowjob(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/blowjob"
        });

        return request.file;
    };

    public async getSoloGirl(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/solo"
        });

        return request.file;
    };

    public async getNeko(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/neko"
        });

        return request.file;
    };

    public async getBoobs(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/boobs"
        });

        return request.file;
    };

    public async getAnal(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/anal"
        });

        return request.file;
    };

    public async getPussy(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/pussy"
        });

        return request.file;
    };

    public async getYuri(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/yuri"
        });

        return request.file;
    };

    public async getBDSM(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/bdsm"
        });

        return request.file;
    };

    public async getFuta(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/futa"
        });

        return request.file;
    };

    public async getAss(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/ass"
        });

        return request.file;
    };

    public async getKitsune(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/kitsune"
        });

        return request.file;
    };

    public async getFemdom(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/femdom"
        });

        return request.file;
    };

    public async getNekoPara(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/nekopara"
        });

        return request.file;
    };

    public async getLewd(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/lewd"
        });

        return request.file;
    };

    public async getPantyhose(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/pantyhose"
        });

        return request.file;
    };

    public async getCosplay(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/cosplay"
        });

        return request.file;
    };

    public async getPetplay(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/petplay"
        });

        return request.file;
    };

    public async getGasm(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/gasm"
        });

        return request.file;
    };

    public async getTrap(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/trap"
        });

        return request.file;
    };

    public async getAnus(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/anus"
        });

        return request.file;
    };

    public async getHolo(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/holo"
        });

        return request.file;
    };

    public async getYaoi(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/yaoi"
        });

        return request.file;
    };

};