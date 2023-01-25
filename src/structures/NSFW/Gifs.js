class NSFWGifs {
  constructor(client) {
    this.client = client;
  }
  async getAnal() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/anal",
    });
  }

  async getAss() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/ass",
    });
  }

  async getBDSM() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/bdsm",
    });
  }

  async getBlowJob() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/blowjob",
    });
  }

  async getBoobJob() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/boobjob",
    });
  }

  async getBoobs() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/boobs",
    });
  }

  async getCum() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/cum",
    });
  }

  async getFeet() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/feet",
    });
  }

  async getFuta() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/futa",
    });
  }

  async getHandJob() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/handjob",
    });
  }

  async getHentai() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/hentai",
    });
  }

  async getKitsune() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/kitsune",
    });
  }

  async getKuni() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/kuni",
    });
  }

  async getNeko() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/neko",
    });
  }

  async getPussy() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/pussy",
    });
  }

  async getWank() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/wank",
    });
  }

  async getSolo() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/solo",
    });
  }

  async getSpank() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/spank",
    });
  }

  async getFemdom() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/femdom",
    });
  }

  async getTentacle() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/tentacle",
    });
  }

  async getToys() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/toys",
    });
  }

  async getYuri() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/gif/yuri",
    });
  }
}

module.exports = {
  NSFWGifs,
};
