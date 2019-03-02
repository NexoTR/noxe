const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.channel.send("**" + `${message.guild.name}` + "**" + " " + `Adlı Sunucunun Kurucusu` + " " + "**" + `${message.guild.owner.user.username}` + "**")

}

module.exports.help = {
    name: "kurucu"
}