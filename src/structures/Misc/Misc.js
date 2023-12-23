class Misc {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async getDadJoke() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/dadjoke",
    });
  }

  async getMe() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/me",
    });
  }
}

module.exports = {
  Misc,
};
