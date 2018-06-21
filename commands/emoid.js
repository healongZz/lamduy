exports.run = (client, message, args) => {
message.delete();
let emoji = args[0];
message.channel.send(`\${emoji}`);

}
