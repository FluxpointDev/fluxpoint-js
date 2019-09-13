const ImageGen = require('./src/ImageGen');

class FluxpointAPI {
    constructor(apikey) {
        this.ImageGen = new ImageGen(apikey);
    }
}

module.exports = FluxpointAPI;