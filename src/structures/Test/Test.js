class Test {
  constructor(client) {
    this.client = client;
  }
  async test() {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/",
    });
  }

  async testGallery() {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/test/gallery",
    });
  }

  async testImage(type = "png" | "webp") {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: `/test/image?type=${type}`,
    });
  }

  async testError() {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/test/error",
    });
  }
}

module.exports = {
  Test,
};
