const Discord = require('discord.js')
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
	let message = await message.channel.send("**Oluşturuluyor...**")

	let {body} = await superagent
	.get('http://aws.random.cat/meow')
	//console.log(body.file)
	if(!{body}) return message.channel.send("**Lütfen Tekrar Deneyin.**")

		let cat = new Discord.RichEmbed()
		.setColor(`RANDOM`)
		.setAuthor("Kediler", message.guild.iconURL)
		.setImage(body.file)
		.setTimestamp()
		.setFooter("Noxe", message.user.displayAvatarURL)

		message.channel.send(cat)

		message.delete()
}

module.exports.help = {
	name:"kedi"
}