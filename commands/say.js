const Discord = require("discord.js");
const send = require("quick.hook");

exports.run = (client, message, args, send) => {
const embed = new Discord.RichEmbed()
.setDescription(args);
//let emoji = args[0];
send(message.channel, embed, {
  name: 'SayBOT',
  icon: 'https://cdn.discordapp.com/attachments/438209852767076353/460039356338667520/326031.png'
})
message.delete();
  
}
