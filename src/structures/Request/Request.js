const fetch = require("cross-fetch");

class Request {
  constructor(token) {
    this.api = "https://gallery.fluxpoint.dev";
    this.token = token;
  }

  async req(
    options = {
      type: "IMG" | "API",
      method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT",
      endpoint: "",
      data: null,
    }
  ) {
    if (!this.token) {
      return Promise.reject("[fluxpoint-js] No token provided");
    }

    if (options.type == "IMG") {
      this.api = "https://gallery.fluxpoint.dev";
    } else if (options.type == "API") {
      this.api = "https://api.fluxpoint.dev";
    } else {
      this.api = "https://gallery.fluxpoint.dev";
    }

    const request = {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token}`,
      },
      body: JSON.stringify(options.data),
    };

    const data = options.data ? JSON.stringify(options.data) : {};

    if (options.method !== "GET") {
      if (options.method !== "DELETE") {
        request["body"] = data;
      }
    }
    return new Promise(async (resolve, reject) => {
      return fetch(this.api + options.endpoint, request).then((x) => {
        x.json()
          .then((res) => {
            return resolve(res);
          })
          .catch(() => {
            resolve(null);
          });
      });
    });
  }
}

module.exports = {
  Request,
};
