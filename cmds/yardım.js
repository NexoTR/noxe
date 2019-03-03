const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	let help = new Discord.RichEmbed()
	.setColor(`RANDOM`)
	.addField("Eğlence Komutları","• n!")
	message.channel.send(help)
}

module.exports.help = {
	name:"yardım"
}