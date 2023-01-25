const { NSFWImages } = require("./Images");
const { NSFWGifs } = require("./Gifs");
class NSFW {
  constructor(client) {
    this.client = client;
    this.images = new NSFWImages(client);
    this.gifs = new NSFWGifs(client);
  }
}

module.exports = {
  NSFW,
};
