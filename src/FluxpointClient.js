const {
  Request,
  Test,
  Misc,
  Color,
  Convert,
  List,
  Images,
  SFW,
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
    this.sfw = new SFW(this);
  }
}

module.exports = {
  FluxpointClient,
};