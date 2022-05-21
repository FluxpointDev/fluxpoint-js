import fetch from "cross-fetch";

export class Request {
    private api: string;
    public token: string;

    constructor(token) {
        this.api = 'https://gallery.fluxpoint.dev';
        this.token = token;
    };

    public async req(opt: RequestOptions): Promise<any> {
        if (!this.token) {
            return Promise.reject('[fluxpoint-js] No token provided');
        };

        const request = {
            method: opt.method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${this.token}`,
            }
        };

        const data = (opt.data) ? JSON.stringify(opt.data) : {};

        if (opt.method !== "GET") {
            if (opt.method !== "DELETE") {
                // @ts-ignore
                request["body"] = data;
            };
        };
        return new Promise(async (resolve, reject) => {
            return fetch(this.api + opt.endpoint, request).then((x) => {
                x.json().then((res) => {
                    return resolve(res);
                }).catch(() => {
                    resolve(null);
                });
            });
        });
    };
};

interface RequestOptions {
    method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
    endpoint: string;
    data?: any;
};

