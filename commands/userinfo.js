const Discord = require("discord.js");

exports.run = (client, message, args) => {

message.delete();
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL)
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`\`\`\`Username : ${message.author.username}\nTag : ${message.author.tag}\nID : ${message.author.id}\nStatus : ${message.author.presence.status}\nJoin Server : ${message.author.createdAt}\`\`\``);

 message.channel.send(embed)

}
