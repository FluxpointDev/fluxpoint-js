class Minecraft {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async getPing(options = { host: "" | 0, port: "" | 25565 | "25565" }) {
    return await this.#client.request.req({
      method: "GET",
      endpoint: `/mc/ping?host=${options.host}?port=${options.port}`,
    });
  }

  async getPingByHost(host) {
    return await this.#client.request.req({
      method: "GET",
      endpoint: `/mc/ping?host=${host}`,
    });
  }

  async getSkin(playerName, type = "head" | "cube" | "body" | "full" | "all") {
    return await this.#client.request.req({
      method: "GET",
      endpoint: `/mc/skin?player=${playerName}${type ? `?type=${type}` : ""}`,
    });
  }
}

module.exports = {
  Minecraft,
};
