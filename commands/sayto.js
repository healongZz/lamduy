exports.run = (client, message, args, ops) => {

if(message.author.id !== ops.ownerID) return message.reply("This BoT Not Allow Everyone Use !");

let sayto = args[0];
let say = args[1];
let channelTo = message.guild.channels.find("name", sayto);

message.channel.send(say);

}
