const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	let ic = message.guild.iconURL;
	let server = new Discord.RichEmbed()
	.setColor('#ff6523')
	.setTitle("**" + `${message.guild.name}` + "**" + " " + "Sunucu Bilgileri")
	.setThumbnail(ic)
	message.channel.send(server)
}

module.exports.help = {
	name:"sunucu"
}
