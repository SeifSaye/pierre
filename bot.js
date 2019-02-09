const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543479644620324884")
setInterval(function() {
channel.send(`! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:! Pierre :beers::fire:`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
