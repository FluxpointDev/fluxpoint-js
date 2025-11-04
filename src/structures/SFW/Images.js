class SFWImages {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async getAnime() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/anime",
    });
  }

  async getChibi() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/chibi",
    });
  }

  async getNeko() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/neko",
    });
  }

  async getNekoBoy() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/nekoboy",
    });
  }

  async getNekoPara() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/nekopara",
    });
  }

  async getKitsune() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/kitsune",
    });
  }

  async getHolo() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/holo",
    });
  }

  async getAzulane() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/azurlane",
    });
  }

  async getChristmas() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/christmas",
    });
  }

  async getHalloween() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/halloween",
    });
  }

  async getMaid() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/maid",
    });
  }

  async getDDLC() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/ddlc",
    });
  }

  async getWallpaper() {
    return await this.#client.request.req({
      method: "GET",
      endpoint: "/sfw/img/wallpaper",
    });
  }
}

module.exports = {
  SFWImages,
};
