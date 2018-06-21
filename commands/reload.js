expoets.run = (client, message, args, ops) => {

 if(message.author.id !== ops.ownerID) return message.reply('Sorry Only Dev Bot Can Use This Commands ');
 
  try {
     delete require.cache[require.rosolve(`./${args[0]}.js`);
  } catch (e) {
  return message.channel.send(`Unable To Reload : **${args[0]}**`);
  }
  message.channel.send(`Successfully Reloaded : **${args[0]}**`);

}
