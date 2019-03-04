const { RichEmbed } = require('discord.js');


exports.run = async (client, message, args) => {

    /*
        1) Use the messageReactionAdd and messageReactionRemove events to add/remove users roles
        2) Remove the awaitReactions() function as we won't need that anymore
        3) Customize the message a bit more to fit a general welcome channel
    */

    await message.delete().catch(O_o => {});

    const a = message.guild.roles.get('542378006241607680'); // Verify

    const embed = new RichEmbed()
        .setTitle('__**Verify Message**__')
        .setDescription(`

        Please click on the -> ✅ Emoji to get the ${a.toString()} role!
 
       
       `)
        .setColor(0xdd9323)
        .setTimestamp()
        .setFooter(`Made by Ich#3236`);

    message.channel.send(embed).then(async msg => {

        await msg.react('✅');
    });
};

exports.help = {
    name: 'welcomeroles'
};