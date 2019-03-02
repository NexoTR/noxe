const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	let server = new Discord.RichEmbed()
	.setColor('#ff6523')
	.setTitle("**" + `${message.guild.name}` + "**" + " " + "#" + `${message.guild.id}` + " " + "Sunucu Bilgileri")
	.setThumbnail(message.guild.iconURL())
	message.channel.send(server)
}

module.exports.help = {
	name:"sunucu"
}