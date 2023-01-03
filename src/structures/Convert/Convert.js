class Convert {
  constructor(client) {
    this.client = client;
  }
  async htmlToMarkdown(options = { html: "" }) {
    return await this.client.request.req({
      type: "API",
      method: "POST",
      endpoint: "/convert/html-markdown",
      data: {
        html: "<h1>Title</h1>",
      },
    });
  }

  async markdownToHTML(options = { markdown: "" }) {
    return await this.client.request.req({
      type: "API",
      method: "POST",
      endpoint: "/convert/markdown-html",
      data: {
        markdown: options.markdown,
      },
    });
  }
}

module.exports = {
  Convert,
};
