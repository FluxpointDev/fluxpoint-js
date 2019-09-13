const axios = require('axios');

class ImageGen {
    constructor(key) {
        this.key = key
        this.baseURL = "https://api.fluxpoint.dev/gen";
        this.axiosinstance = axios.create({
            baseURL: this.baseURL,
            timeout: 5000,
            headers: { 'Authorization': this.key }
        })
    }
    /*
        Allows you to get a test image to test the API and your key.
    */
    async getTestImage() {
        var self = this;
        try {
            const response = await self.axiosinstance.get('/test');
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = ImageGen;