const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "_";
const ownerID = "your Id here";

client.on('message', message => {

  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
 
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix) return;
  
  try {
  
     delete require.cache[require.resolve(`./commands/${cmd}.js`)];          
  
     let commandFile = require(`./commands/${cmd}.js`);
     commandFile.run(client, message, args);
  
  } cache (e) {
    console.log(e.stack);
  }
});

client.on('ready', () => console.log('Bot Has Online Now'));

client.login(process.env.TOKEN);