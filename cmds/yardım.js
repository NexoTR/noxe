const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	let help = new Discord.RichEmbed()
	.setColor(`RANDOM`)
	.addField("Kategoriler","• n!temel - Temel Komutlar \n • n!eglence - Eğlence Komutlar \n • n!yetkili - Yetkili Komutlar")
	message.channel.send(help)
}

module.exports.help = {
	name:"yardım"
}
