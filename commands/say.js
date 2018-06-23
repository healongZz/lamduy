const send = require("quick.hook");

exports.run = (client, message, args) => {

//let emoji = args[0];
send(message.chhanel, args, {
  name: 'SayBOT',
  color: '8972da',
  icon: 'https://cdn.discordapp.com/attachments/438209852767076353/460039356338667520/326031.png'
})
message.delete();
  
}
