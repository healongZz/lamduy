const Discord = require("discord.js");

exports.run = (client, message, args) => {

const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(message.author.username, message.author.avatarURL)
.setDescription(`\`\`\`Username : ${message.author.username}\nFull Username : ${message.author.tag}\nID : ${message.author.id}\nJoin Server : ${message.author.joinedAt}\`\`\``);

 message.channel.send(embed)

}
