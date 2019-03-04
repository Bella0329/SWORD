const { RichEmbed } = require('discord.js');


exports.run = async (client, message, args) => {

    /*
        1) Use the messageReactionAdd and messageReactionRemove events to add/remove users roles
        2) Remove the awaitReactions() function as we won't need that anymore
        3) Customize the message a bit more to fit a general welcome channel
    */

    await message.delete().catch(O_o => {});

    const e = message.guild.roles.get('551324196731355136'); // Verify

    const embed = new RichEmbed()
        .setTitle('__**Server Rules**__')
        .setDescription(`
        »Naming
        •Nicknames must not contain any offensive or other prohibited or protected name or name parts.
        
        »Tone
        •The handling should always be friendly. Verbal attacks against other users are strictly prohibited.
        
        » Server-Chat
        •Also in the chat insults etc. are prohibited.
        
        »Record conversations
        •The recording of conversations is allowed on the entire server only after consultation with the present users of the corresponding channel. If a user does not consent to the recording, the recording of the conversation is prohibited.
        
        »Support
        •Support exploitation is here prohibited
        
        »Advertising
        •Advertising is completely prohibited here! From 3 warnings you get a permanent ban from the Discord server.
        
        »Data protection
        •Private data such as telephone numbers, addresses, passwords and the like may not be publicly exchanged. A server admin will never ask for sensitive data, such as user passwords.
        
        »hacker attacks
        •Any attack against this server is punishable and possibly prosecuted.
        
        »Kick / banning
        •A kick or spell is at no time unfounded, but should encourage reflection on one's own behavior. Inappropriate kicks / bans must be reported to the responsible admins.
        
        »give instructions
        •Server admins, moderators or otherwise authorized have full authority. Denying a particular statement can lead to a kick or a ban.
        
        »Own music / sounds
        •The recording of own music, or the transfer of other unwanted sounds is prohibited.
        
        »compulsory registration
        •All users are required to follow the rules. If a rule violation is detected, it must be reported immediately.

        To accept the rules you have to click on this -> 🆗 Emoji to get the ${e.toString()} role!
 
       
       `)
        .setColor(0xdd9323)
        .setTimestamp()
        .setFooter(`Made by Ich#3236`);

    message.channel.send(embed).then(async msg => {

        await msg.react('🆗');
    });
};

exports.help = {
    name: 'welcomeroles'
};