const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let botinf = new Discord.RichEmbed()
    .setTitle("**" + bot.user.username + "**" + " " + "Bilgileri...")
    .setColor(`RANDOM`)
    .addField("**:id: Bot ID**",bot.user.id,true)
    .setThumbnail(bot.user.avatarURL)
    message.channel.send({embed: botinf})
}

module.exports.help = {
    name: "bot"
}