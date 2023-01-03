class Animal {
  constructor(client) {
    this.client = client;
  }
  async getCat() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/cat",
    });
  }

  async getDog() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/dog",
    });
  }

  async getDuck() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/duck",
    });
  }

  async getLizard() {
    return await this.client.request.req({
      type: "IMG",
      method: "GET",
      endpoint: "/api/sfw/img/lizard",
    });
  }
}

module.exports = {
  Animal,
};
