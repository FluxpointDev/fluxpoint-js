class SFWImages {
  constructor(client) {
    this.client = client;
  }
  async getAnime() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/anime",
    });
  }

  async getChibi() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/chibi",
    });
  }

  async getNeko() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/neko",
    });
  }

  async getNekoBoy() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/nekoboy",
    });
  }

  async getNekoPara() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/nekopara",
    });
  }

  async getKitsune() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/kitsune",
    });
  }

  async getHolo() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/holo",
    });
  }

  async getAzulane() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/azurlane",
    });
  }

  async getChristmas() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/christmas",
    });
  }

  async getHalloween() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/halloween",
    });
  }

  async getMaid() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/maid",
    });
  }

  async getDDLC() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/ddlc",
    });
  }

  async getWallpaper() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/wallpaper",
    });
  }
}

module.exports = {
  SFWImages,
};
