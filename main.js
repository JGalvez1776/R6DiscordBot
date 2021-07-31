require('dotenv').config()

// Maybe remove these two lines
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fetch = require("node-fetch");

const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

async function getRating(url) {
    console.log(url)
    const response = await fetch(url);  
    const text = await response.text();

    try { 
        // If the website gets changed this breaks 
        var mmr = text.match(/>.*MMR/g)[7].slice(1, -3);
        console.log(mmr);
        return mmr
    } catch (error) {
        console.error(error);
        return;
    }
}


function generateURL(platform, username) {
  var end =  platform + '/' + username
  return 'https://r6.tracker.network/profile/' + end;
}

function reply(msg, mmr) {

}


client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag + '!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(command);

    if (command === 'ping') {
        console.log('pong');
        message.reply("pong");
    }
    if (command === "a") {
        var url = generateURL("xbox", "PK Hot Plays");
        console.log(url);
        var result = getRating(url).then((value) => message.reply(value));
    }
    
});

client.login(process.env.TOKEN);
