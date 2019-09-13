const axios = require('axios');

class ImageGen {
    constructor(key) {
        this.key = key
        this.baseURL = "https://api.fluxpoint.dev/gen";
        this.axiosinstance = axios.create({
            baseURL: this.baseURL,
            timeout: 5000,
            headers: {
                'Authorization': this.key,
                'Content-Length': 0
            }
        })
    }
    /*
        Allows you to get a test image to test the API and your key.
    */
    async getTestImage() {
        var self = this;
        try {
            const response = await self.axiosinstance.get('/test');
            console.log(response);

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = ImageGen;