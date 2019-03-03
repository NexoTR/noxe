const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
	const createserver = moment(message.guild.createdAt).format('ll')
	let ic = message.guild.iconURL;
	let server = new Discord.RichEmbed()
	.setColor('#ff6523')
	.setTitle("**" + `${message.guild.name}` + "**" + " " + "Sunucu Bilgileri")
	.setThumbnail(ic)
	.addField(":calendar:**Kuruluş Tarihi**",createserver,true)
	.addField(":satellite:**Kanal Sayısı**",message.guild.channels.size,true)
	.setFooter("**ID = **" + message.guild.id + " | " + "**Bölge = **" + message.guild.region)
	message.channel.send(server)
}

module.exports.help = {
	name:"sunucu"
}
