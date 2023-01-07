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
    const r = await this.client.request.req({
      type: "API",
      method: "POST",
      endpoint: "/gen/welcome",
      data: {
        username: options.username,
        avatar: options.avatar,
        background: options.background,
        members: options.members,
        icon: options.icon,
        banner: options.banner,
        color_welcome: options.color_welcome,
        color_username: options.color_username,
        color_members: options.color_members,
      },
    });

    return Buffer.from(r).toString("hex");
  }
}

module.exports = {
  Images,
};
