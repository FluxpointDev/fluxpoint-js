class List {
  constructor(client) {
    this.client = client;
  }
  async getTemplates() {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/list/templates",
    });
  }

  async getBanners() {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/list/banners",
    });
  }

  async getIcons() {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/list/icons",
    });
  }
}

module.exports = {
  List,
};
