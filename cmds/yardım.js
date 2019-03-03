const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")){
		let help = new Discord.RichEmbed()
		.setColor(`RANDOM`)
		.setTitle("Komutlar")
		.addField(```asciidoc
			[Turuncu]
			```,"test")
		message.channel.send(help)
	}
}

module.exports.help = {
	name: "yardım"
}
