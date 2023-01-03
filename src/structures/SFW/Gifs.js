class SFWGifs {
  constructor(client) {
    this.client = client;
  }
  async getBaka() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/baka",
    });
  }

  async getBite() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/bite",
    });
  }

  async getBlush() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/blush",
    });
  }

  async getCry() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/cry",
    });
  }

  async getDance() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/dance",
    });
  }

  async getFeed() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/feed",
    });
  }

  async getFluff() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/fluff",
    });
  }

  async getGrab() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/grab",
    });
  }

  async getHandHold() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/handhold",
    });
  }

  async getHighFive() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/highfive",
    });
  }

  async getHug() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/hug",
    });
  }

  async getKiss() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/kiss",
    });
  }

  async getLick() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/lick",
    });
  }

  async getNeko() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/neko",
    });
  }

  async getPat() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/pat",
    });
  }

  async getPoke() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/poke",
    });
  }

  async getPunch() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/punch",
    });
  }

  async getShrug() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/shrug",
    });
  }

  async getSlap() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/slap",
    });
  }

  async getSmug() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/smug",
    });
  }

  async getStare() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/stare",
    });
  }

  async getTickle() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/tickle",
    });
  }

  async getTailWag() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/wag",
    });
  }

  async getWasted() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/wasted",
    });
  }

  async getWave() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/wave",
    });
  }

  async getWink() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/gif/wink",
    });
  }
}

module.exports = {
  SFWGifs,
};
