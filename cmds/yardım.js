const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	let first = args.join(" ")
	if(!message.member.hasPermission("ADMINISTRATOR")){
		let help = new Discord.RichEmbed()
		.setColor('#ff6523')
		.addField("Kategoriler","• n!yardım bot = Bot Bilgileri \n •n!yardım yetkili = Yetkili Komutları \n •n!yardım ayarlar = Bot Ayarları")
		return message.member.send({ embed: help})
	if(first === "yardım"){
	message.channel.send("helo")
	}
	}
	
	
	if(message.member.hasPermission("ADMINISTRATOR")){
		let help = new Discord.RichEmbed()
		.setColor('#ff6523')
		.addField("Kategoriler","• n!yardım bot = Bot Bilgileri \n •n!yardım yetkili = Yetkili Komutları \n •n!yardım ayarlar = Bot Ayarları")
	message.member.send({ embed: help})
	}
}

module.exports.help = {
	name: "yardım"
}
