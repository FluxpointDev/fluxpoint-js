const types = require('./types');

class CustomImageBuilder {
    constructor() {
        this.retvar = {
            Base: {},
            Images: [],
            Texts: []
        }
    }
    /**
     * Sets the base object as described here https://docs.fluxpoint.dev/api/custom-image-generation
     * @param {Object} obj The Image Format needed to set as the base object 
     */
    setBase(obj) {
        var self = this;
        self.retvar.Base = obj;
    }
    /**
     * Adds an image format object to the sending image https://docs.fluxpoint.dev/api/custom-image-generation
     * @param {Object} obj ImageFormat to add to the custom image
     */
    addImage(obj) {
        var self = this;
        self.retvar.Images.push(obj);
    }
    /**
     * Adds text to the object we want to send https://docs.fluxpoint.dev/api/custom-image-generation
     * @param {Object} obj The TextObject object to add to this request
     */
    addText(obj) {
        var self = this;
        self.retvar.Texts.push(obj);
    }
    /**
     * Builds the body to send as the request.
     */
    buildBody() {
        var self = this;
        return self.retvar;
    }
}
module.exports = CustomImageBuilder;