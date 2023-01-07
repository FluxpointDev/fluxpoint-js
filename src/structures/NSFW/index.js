const { NSFWImages } = require("./Images");
class NSFW {
  constructor(client) {
    this.client = client;
    this.images = new NSFWImages(client);
  }
}

module.exports = {
  NSFW,
};
