const {
  Request,
  Test,
  Misc,
  Color,
  Convert,
  List,
  Images,
  Minecraft,
  SFW,
  Meme,
  Animal,
  NSFW,
} = require("./structures/index");
class FluxpointClient {
  constructor(options = { token: "" }) {
    this.token = options.token;
    this.request = new Request(this.token);
    this.test = new Test(this);
    this.misc = new Misc(this);
    this.color = new Color(this);
    this.convert = new Convert(this);
    this.list = new List(this);
    this.images = new Images(this);
    this.minecraft = new Minecraft(this);
    this.sfw = new SFW(this);
    this.meme = new Meme(this);
    this.animal = new Animal(this);
    this.nsfw = new NSFW(this);
  }
}

module.exports = {
  FluxpointClient,
};
