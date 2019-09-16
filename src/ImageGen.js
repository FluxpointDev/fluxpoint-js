const axios = require('axios');
const WelcomeBuilder = require('./WelcomeImageBuilder');
const CustomBuilder = require('./CustomImageBuilder');
const types = require('./types');

class ImageGen {
    constructor(key) {
        this.key = key;
        this.types = types;
        this.WelcomeBuilder = WelcomeBuilder;
        this.CustomBuilder = CustomBuilder;
        this.baseURL = "https://api.fluxpoint.dev/gen";
        this.axiosinstance = axios.create({
            baseURL: this.baseURL,
            timeout: 5000,
            headers: {
                'Authorization': this.key,
                'Content-Length': 0,
                'Content-Type': 'application/json'
            },
            responseType: 'arraybuffer'
        })
    }
    /**
     * Function that returns a Blue test image from the api to test the lib and your api key. https://docs.fluxpoint.dev/api/image-generation#test-image
     * @returns { Buffer } Buffer of bytes that are the image in JPG format
     */
    async getTestImage() {
        var self = this;
        try {
            const response = await self.axiosinstance.get('/test');
            const final = Buffer.from(response.data, 'base64')
            return final;
        } catch (error) {
            console.error(error.toJSON().message);
            return null;
        }
    }
    /**
     * Function that returns a Welcome Image based on the fed in data. https://docs.fluxpoint.dev/api/image-generation#welcome-image
     * @returns { Buffer } Buffer of bytes that are the image in JPG format
     */
    async getWelcomeImage(obj) {
        var self = this;

        try {
            const response = await self.axiosinstance.post('/welcome', obj);
            const final = Buffer.from(response.data, 'base64')
            return final;
        } catch (error) {
            console.log(error.response.data.toString());


            console.error(error.toJSON().message);
            return null;
        }
    }
    /**
     * Function that returns a Custom Image based on the fed in data. https://docs.fluxpoint.dev/api/custom-image-generation
     * @returns { Buffer } Buffer of bytes that are the image in JPG format
     */
    async getCustomImage(obj) {
        var self = this;
        console.log(obj);

        try {
            const response = await self.axiosinstance.post('/custom', obj);
            const final = Buffer.from(response.data, 'base64')
            return final;
        } catch (error) {
            console.log(error.response.data.toString());


            console.error(error.toJSON().message);
            return null;
        }
    }
}

module.exports = ImageGen;