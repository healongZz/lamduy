exports.run = (client, message, args) => {

let invites = message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**INVITELEADERBOARD**`)
        .setColor('RANDOM')
        .setDescription(`\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
    message.channel.send(embed);

}
