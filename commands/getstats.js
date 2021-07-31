const utils = require('./utils/utils.js');
const accounts = require('./utils/accounts.json');

module.exports = {
    name: "getstats",
    description : "Get stats!",
    cooldown: 5,
    execute(message, args) {
        // var url = utils.generateURL("xbox", "PK Hot Plays");

        if (!accounts.hasOwnProperty(args[0])) {
            message.reply("Invalid name inputted");
            return;
        }

        const userInfo = accounts[args[0]];
        var url = utils.generateURL(userInfo[0], userInfo[1]);
        var result = utils.getRating(url).then((value) => message.reply(value));
    },
}