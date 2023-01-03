class Meme {
  constructor(client) {
    this.client = client;
  }
  async getMeme() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/meme",
    });
  }

  async getNou() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/nou",
    });
  }

  async getPog() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/pog",
    });
  }
}

module.exports = {
  Meme,
};
