class Convert {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async htmlToMarkdown(options = { html: "" }) {
    return await this.#client.request.req({
      method: "POST",
      endpoint: "/convert/html-markdown",
      data: {
        html: options.html,
      },
    });
  }

  async markdownToHTML(options = { markdown: "" }) {
    return await this.#client.request.req({
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
