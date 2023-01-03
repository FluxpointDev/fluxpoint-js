class Color {
  constructor(client) {
    this.client = client;
  }
  async random() {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/color/random",
    });
  }

  async getHex(hex) {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: `/color/info?hex=${hex}`,
    });
  }

  async getRGB(rgb) {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: `/color/info?rgb=${rgb}`,
    });
  }

  async getName(name) {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: `/color/info?name=${name}`,
    });
  }
}

module.exports = {
  Color,
};
