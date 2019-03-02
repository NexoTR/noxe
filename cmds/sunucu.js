const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
	let ic = message.guild.iconURL;
	let server = new Discord.RichEmbed()
	.setColor('#ff6523')
	.setTitle("**" + `${message.guild.name}` + "**" + " " + "Sunucu Bilgileri")
	.setThumbnail(ic)
	.addField(":calendar:**Kuruluş Tarihi**",message.guild.createdAt,true)
	.addField(":satellite:**Sunucu Bölgesi**",message.guild.region,true)
	message.channel.send(server)
}

module.exports.help = {
	name:"sunucu"
}
