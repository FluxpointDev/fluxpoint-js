class NSFWImages {
  constructor(client) {
    this.client = client;
  }
  async getAnal() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/anal",
    });
  }

  async getAnus() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/anus",
    });
  }

  async getAss() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/ass",
    });
  }

  async getAzurlane() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/azurlane",
    });
  }

  async getBDSM() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/bdsm",
    });
  }

  async getBlowJob() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/blowjob",
    });
  }

  async getBoobs() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/boobs",
    });
  }

  async getCosplay() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/cosplay",
    });
  }

  async getCum() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/cum",
    });
  }

  async getFeet() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/feet",
    });
  }

  async getFemdom() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/femdom",
    });
  }

  async getFuta() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/futa",
    });
  }

  async getGasm() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/gasm",
    });
  }

  async getHolo() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/holo",
    });
  }

  async getKitsune() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/kitsune",
    });
  }

  async getLewd() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/lewd",
    });
  }

  async getNeko() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/neko",
    });
  }

  async getNekopara() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/nekopara",
    });
  }

  async getPantsu() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/pantsu",
    });
  }

  async getPantyhose() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/pantyhose",
    });
  }

  async getPeeing() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/peeing",
    });
  }

  async getPetPlay() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/petplay",
    });
  }

  async getPussy() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/pussy",
    });
  }

  async getSlimes() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/slimes",
    });
  }

  async getSolo() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/solo",
    });
  }

  async getSwimsuit() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/swimsuit",
    });
  }

  async getTentacle() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/tentacle",
    });
  }

  async getThighs() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/thighs",
    });
  }

  async getTrap() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/trap",
    });
  }

  async getYaoi() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/yaoi",
    });
  }

  async getYuri() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/nsfw/img/yuri",
    });
  }
}

module.exports = {
  NSFWImages,
};
