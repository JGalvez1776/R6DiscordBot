const utils = require('./utils.js');

module.exports = {
    name: "getstats",
    description : "Get stats!",
    execute(message, args) {
        var url = utils.generateURL("xbox", "PK Hot Plays");
        console.log(url);
        var result = utils.getRating(url).then((value) => message.reply(value));
    },
}