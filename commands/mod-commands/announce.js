const Discord = require('discord.js');

exports.run = async(client, message, args, ops) => {

    await message.delete().catch(O_o => {});

const error = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("You don't have the right perms.")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(error).then(msg => {msg.delete(10000)});
    const color = args[0]
const text = args.slice(1).join(" ");
if (text.length < 1) return message.channel.send("Can not announce nothing");
//const colour = args.slice(2).join("");
const embed = new Discord.RichEmbed()
.setColor("0x" + color)
.setTitle("Important Announcement:")
.setDescription(text);
message.channel.send("@everyone")
message.channel.send({embed})
}