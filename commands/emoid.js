exports.run = (client, message, args) => {

let emoji = args[0];
message.channel.send('\${emoji}');

}
