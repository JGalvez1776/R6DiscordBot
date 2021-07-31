const {prefix} = require('../config.json');

module.exports = {
    name: "message",
    execute(message, client) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        console.log(command);

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('An error encountered trying to execute your command');
        }
    }
}