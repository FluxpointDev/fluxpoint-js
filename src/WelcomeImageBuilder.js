const Joi = require('@hapi/joi');

class WelcomeImageBuilder {
    constructor(username = '', avatar = '', background = '', members = '') {
        this.username = username;
        this.avatar = avatar;
        this.icon = '';
        this.background = background;
        this.banner = '';
        this.members = members;
        //optional setup
        this.color_welcome = '';
        this.color_username = '';
        this.color_members = '';
    }
    /**
     * Sets the Username Field
     * @param {String} value The value you want to be set
     */
    setUsername(value) {
        this.username = value;
    }

    /**
     * Sets the Avatar Field
     * @param {String} value The value you want to be set
     */
    setAvatar(value) {
        this.avatar = value;
    }

    /**
     * Sets the Icon Field
     * @param {String} value The value you want to be set
     */
    setIcon(value) {
        this.icon = value;
    }

    /**
     * Sets the Background Field
     * @param {String} value The value you want to be set
     */
    setBackground(value) {
        this.background = value;
    }

    /**
     * Sets the Banner Field
     * @param {String} value The value you want to be set
     */
    setBanner(value) {
        this.banner = value;
    }

    /**
     * Sets the Members Field
     * @param {String} value The value you want to be set
     */
    setMembers(value) {
        this.members = value;
    }

    /**
     * Sets the color_welcome Field
     * @param {String} value The value you want to be set
     */
    setColorWelcome(value) {
        this.color_welcome = value;
    }

    /**
     * Sets the color_username Field
     * @param {String} value The value you want to be set
     */
    setColorUsername(value) {
        this.color_username = value;
    }

    /**
     * Sets the color_members Field
     * @param {String} value The value you want to be set
     */
    setColorMembers(value) {
        this.color_members = value;
    }

    /**
     * Checks to see if this object is valid
     * @returns {Object} obj.valid boolean that tells if the obj is valid, obj.message Array of strings to tell errors if valid is false.
     */
    isValid() {
        var self = this;
        const schema = Joi.object({
            username: Joi.string().alphanum().required(),
            avatar: Joi.string().alphanum().required(),
            icon: Joi.string().alphanum().required(),
            background: Joi.string().alphanum().required(),
            banner: Joi.string().alphanum().required(),
            members: Joi.string().alphanum().required(),
            color_welcome: Joi.string().alphanum(),
            color_username: Joi.string().alphanum(),
            color_members: Joi.string().alphanum(),
        });

        const ret = {
            username: self.username,
            avatar: self.avatar,
            icon: self.icon,
            background: self.background,
            banner: self.banner,
            members: self.members
        }
        if (self.color_welcome != '') ret.color_welcome = self.color_welcome;
        if (self.color_username != '') ret.color_username = self.color_username;
        if (self.color_members != '') ret.color_members = self.color_members;

        let { error } = schema.validate(ret);
        if (error) {
            let res = [];
            error.details.forEach(err => {
                res.push(err.message);
            });
            return { valid: false, message: res };
        } else return { valid: true };
    }

    /**
     * Used to generate the JSON needed for a welcome message from this class.
     * @returns {Object} The object that represents the welcome message. returns null if invlid
     */
    buildBody() {
        var self = this;
        if (self.isValid()) {
            const ret = {
                username: self.username,
                avatar: self.avatar,
                icon: self.icon,
                background: self.background,
                banner: self.banner,
                members: self.members
            }
            if (self.color_welcome != '') ret.color_welcome = self.color_welcome;
            if (self.color_username != '') ret.color_username = self.color_username;
            if (self.color_members != '') ret.color_members = self.color_members;

            return ret;
        } else return null;
    }
}
module.exports = WelcomeImageBuilder;