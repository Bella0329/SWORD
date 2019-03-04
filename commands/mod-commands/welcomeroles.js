const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    /*
        1) Use the messageReactionAdd and messageReactionRemove events to add/remove users roles
        2) Remove the awaitReactions() function as we won't need that anymore
        3) Customize the message a bit more to fit a general welcome channel
    */

    await message.delete().catch(O_o => {});

    const y = message.guild.roles.get('485987998794514442'); // Moderator
    const x = message.guild.roles.get('485987998165499914'); // Administrator
    const z = message.guild.roles.get('482192667766423561'); // Developer

    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
       
        Welcome to **${message.guild.name}**! You may choose from our list of roles you can join/leave from:
       🇦 
       🇧 
       🇨 
       `)
        .setColor(0xdd9323)
        .setFooter(`Guild ID: ${message.guild.id}`);

    message.channel.send(embed).then(async msg => {

        await msg.react('🇦');
        await msg.react('🇧');
        await msg.react('🇨');
    });
};

exports.help = {
    name: 'welcomeroles'
};