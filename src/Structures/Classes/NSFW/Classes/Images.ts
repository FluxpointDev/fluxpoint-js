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

        return request;
    };

    public async getFeet(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/feet"
        });

        return request;
    };

    public async getCum(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/cum"
        });

        return request;
    };

    public async getBlowjob(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/blowjob"
        });

        return request;
    };

    public async getSoloGirl(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/solo"
        });

        return request;
    };

    public async getNeko(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/neko"
        });

        return request;
    };

    public async getBoobs(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/boobs"
        });

        return request;
    };

    public async getAnal(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/anal"
        });

        return request;
    };

    public async getPussy(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/pussy"
        });

        return request;
    };

    public async getYuri(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/yuri"
        });

        return request;
    };

    public async getBDSM(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/bdsm"
        });

        return request;
    };

    public async getFuta(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/futa"
        });

        return request;
    };

    public async getAss(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/ass"
        });

        return request;
    };

    public async getKitsune(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/kitsune"
        });

        return request;
    };

    public async getFemdom(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/femdom"
        });

        return request;
    };

    public async getNekoPara(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/nekopara"
        });

        return request;
    };

    public async getLewd(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/lewd"
        });

        return request;
    };

    public async getPantyhose(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/pantyhose"
        });

        return request;
    };

    public async getCosplay(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/cosplay"
        });

        return request;
    };

    public async getPetplay(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/petplay"
        });

        return request;
    };

    public async getGasm(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/gasm"
        });

        return request;
    };

    public async getTrap(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/trap"
        });

        return request;
    };

    public async getAnus(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/anus"
        });

        return request;
    };

    public async getHolo(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/holo"
        });

        return request;
    };

    public async getYaoi(): Promise<Response> {
        const request = await this.client.request.req({
            method: "GET",
            endpoint: "/api/nsfw/img/yaoi"
        });

        return request;
    };

};