exports.run = (client, message, args) => {
message.delete();
let emoji = args.join(" ");
message.channel.send(`\${emoji}`);

}
