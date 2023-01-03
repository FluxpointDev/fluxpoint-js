const { SFWImages } = require("./Images");
const { SFWGifs } = require("./Gifs");
class SFW {
  constructor(client) {
    this.client = client;
    this.images = new SFWImages(client);
    this.gifs = new SFWGifs(client);
  }
}

module.exports = {
  SFW,
};
