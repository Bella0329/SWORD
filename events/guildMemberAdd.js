const Discord = require('discord.js')

module.exports = (client, member, message) => {

    let userLogs = member.guild.channels.find(c => c.name === 'user_logs');

    const join = new Discord.RichEmbed()
    .setTimestamp()
    .setDescription(`${member.user.tag} has joined **${member.guild}**!`)
    .setColor('GREEN')
    .setFooter('User join')
    // anthony#8577
    userLogs.send(join);

};