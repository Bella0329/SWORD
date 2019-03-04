const Discord = require('discord.js')

module.exports = (client, member, message) => {

    let userLogs = member.guild.channels.find(c => c.name === 'user_logs');

    // anthony#8577

    const leave = new Discord.RichEmbed()
    .setTimestamp()
    .setDescription(`${member.user.tag} has left **${member.guild}**!`)
    .setColor('RED')
    .setFooter('User left')

    userLogs.send(leave);

};