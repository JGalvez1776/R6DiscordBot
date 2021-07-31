

async export function getRating(url) {
    const response = await fetch(url);
    const text = await response.text();
    const dom = await new JSDOM(text);
    try { 
        // If the website gets changed this breaks 
        var mmr = text.match(/>.*MMR/g)[7].slice(1, -3);
        return "MMR: " + mmr
        console.log("MMR: " + mmr);
    } catch (error) {
        console.error(error);
        return;
    }
    console.log("Done");
}

export function generateURL(platform, username) {
    return 'https://r6.tracker.network/profile/' + platform + '/' + username;
}
