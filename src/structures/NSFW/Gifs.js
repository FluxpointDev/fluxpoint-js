class NSFWGifs {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async getAnal() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/anal",
    });
  }

  async getAss() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/ass",
    });
  }

  async getBDSM() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/bdsm",
    });
  }

  async getBlowJob() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/blowjob",
    });
  }

  async getBoobJob() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/boobjob",
    });
  }

  async getBoobs() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/boobs",
    });
  }

  async getCum() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/cum",
    });
  }

  async getFeet() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/feet",
    });
  }

  async getFuta() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/futa",
    });
  }

  async getHandJob() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/handjob",
    });
  }

  async getHentai() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/hentai",
    });
  }

  async getKitsune() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/kitsune",
    });
  }

  async getKuni() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/kuni",
    });
  }

  async getNeko() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/neko",
    });
  }

  async getPussy() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/pussy",
    });
  }

  async getWank() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/wank",
    });
  }

  async getSolo() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/solo",
    });
  }

  async getSpank() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/spank",
    });
  }

  async getFemdom() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/femdom",
    });
  }

  async getTentacle() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/tentacle",
    });
  }

  async getToys() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/toys",
    });
  }

  async getYuri() {
    return await this.#client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/nsfw/gif/yuri",
    });
  }
}

module.exports = {
  NSFWGifs,
};
