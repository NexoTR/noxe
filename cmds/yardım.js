const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")){
		var num = args.join(" ");
		if (num.content === "eglence"){
			message.channel.send("test")
		}
	}
}

module.exports.help = {
	name: "yardım"
}
