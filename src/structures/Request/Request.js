const fetch = require("cross-fetch");

class Request {
  constructor(token) {
    this.api = "https://api.fluxpoint.dev";
    this.token = token;
  }

  async req(
    options = {
      method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT",
      endpoint: "",
      data: null,
    },
  ) {
    return new Promise(async (resolve, reject) => {
      if (!this.token) {
        return reject("[fluxpoint-js] No token provided");
      }

      const request = {
        method: options.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${this.token}`,
        },
      };

      const data = options.data ? JSON.stringify(options.data) : {};

      if (options.method !== "GET" && options.method !== "DELETE") {
        request["body"] = data;
      }

      return fetch(this.api + options.endpoint, request).then((x) => {
        x.json()
          .then((res) => {
            return resolve(res);
          })
          .catch((e) => {
            resolve(null);
          });
      });
    });
  }
}

module.exports = {
  Request,
};
