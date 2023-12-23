class Meme {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async getMeme() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/img/meme",
    });
  }

  async getNou() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/img/nou",
    });
  }

  async getPog() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/img/pog",
    });
  }
}

module.exports = {
  Meme,
};
