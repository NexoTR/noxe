const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")){
		var num = args[0];
		if (!num){
			message.channel.send("test")
		}
	}
}

module.exports.help = {
	name: "yardım"
}
