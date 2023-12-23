class SFWGifs {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async getBaka() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/baka",
    });
  }

  async getBite() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/bite",
    });
  }

  async getBlush() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/blush",
    });
  }

  async getCry() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/cry",
    });
  }

  async getDance() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/dance",
    });
  }

  async getFeed() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/feed",
    });
  }

  async getFluff() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/fluff",
    });
  }

  async getGrab() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/grab",
    });
  }

  async getHandHold() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/handhold",
    });
  }

  async getHighFive() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/highfive",
    });
  }

  async getHug() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/hug",
    });
  }

  async getKiss() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/kiss",
    });
  }

  async getLick() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/lick",
    });
  }

  async getNeko() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/neko",
    });
  }

  async getPat() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/pat",
    });
  }

  async getPoke() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/poke",
    });
  }

  async getPunch() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/punch",
    });
  }

  async getShrug() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/shrug",
    });
  }

  async getSlap() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/slap",
    });
  }

  async getSmug() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/smug",
    });
  }

  async getStare() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/stare",
    });
  }

  async getTickle() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/tickle",
    });
  }

  async getTailWag() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/wag",
    });
  }

  async getWasted() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/wasted",
    });
  }

  async getWave() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/wave",
    });
  }

  async getWink() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/wink",
    });
  }

  async getLaugh() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/sfw/gif/laugh",
    });
  }
}

module.exports = {
  SFWGifs,
};
