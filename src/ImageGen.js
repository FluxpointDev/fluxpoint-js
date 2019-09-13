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
            },
            responseType: 'arraybuffer'
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
            const final = Buffer.from(response.data, 'base64')
            return final;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = ImageGen;