class Minecraft {
  constructor(client) {
    this.client = client;
  }
  async getPing(options = { host: "" | 0, port: "" | 25565 | "25565" }) {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: `/mc/ping?host=${options.host}?port=${options.port}`,
    });
  }

  async getPingByHost(host) {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: `/mc/ping?host=${host}`,
    });
  }
}

module.exports = {
  Minecraft,
};
