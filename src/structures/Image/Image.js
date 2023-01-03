class Images {
  constructor(client) {
    this.client = client;
  }
  async generateTemplate(template) {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: `/gen/${template}`,
    });
  }

  async generate() {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/gen/html",
    });
  }

  async generateCustom() {
    return await this.client.request.req({
      type: "API",
      method: "GET",
      endpoint: "/gen/custom",
    });
  }

  async generateWelcome(
    options = {
      username: "",
      avatar: "",
      background: "",
      members: "",
      icon: "",
      banner: "",
      color_welcome: "",
      color_username: "",
      color_members: "",
    }
  ) {
    return await this.client.request.req({
      type: "API",
      method: "POST",
      endpoint: "/gen/welcome",
      data: options,
    });
  }
}

module.exports = {
  Images,
};
