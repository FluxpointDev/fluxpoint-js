class Animal {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async getCat() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/img/cat",
    });
  }

  async getDog() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/img/dog",
    });
  }

  async getDuck() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/img/duck",
    });
  }

  async getLizard() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/img/lizard",
    });
  }
}

module.exports = {
  Animal,
};
