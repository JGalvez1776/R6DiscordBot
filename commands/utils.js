const fetch = require("node-fetch");


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

module.exports = {getRating, generateURL, reply, fetch};
