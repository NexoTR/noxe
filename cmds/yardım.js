const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")){
		let help = new Discord.RichEmbed()
		.setColor('#ff6523')
		.setTitle(":page_facing_up: **Komutlar**")
		.addBlankField()
		.addField("**:new: - n!profil [Etiket]**","Etiketlenen Kişinin Profilini Gösterir.")
		.addField("**n!avatar [Etiket]**","Etiketlenen Kişinin Avatarını Gösterir.")
		.addField("**n!bot**","Bot Bilgilerini Gösterir.")
		.addField("**n!kurucu**","Sunucu Kurucusunu Gösterir.")
		return message.member.send({ embed: help})
	}
	
	
	if(message.member.hasPermission("ADMINISTRATOR")){
		let staff = new Discord.RichEmbed()
		.setTitle(":page_facing_up: **Yetkili Komutları**")
		.setColor('#ff6523')
		.addField("**n!sunucu**", "Sunucu Bilgilerini Gösterir.")

		let help = new Discord.RichEmbed()
		.setColor('#ff6523')
		.setTitle(":page_facing_up: **Komutlar**")
		.addBlankField()
		.addField("**:new: - n!profil [Etiket]**","Etiketlenen Kişinin Profilini Gösterir.")
		.addField("**n!avatar [Etiket]**","Etiketlenen Kişinin Avatarını Gösterir.")
		.addField("**n!bot**","Bot Bilgilerini Gösterir.")
		.addField("**n!kurucu**","Sunucu Kurucusunu Gösterir.")
		
	message.member.send({ embed: staff})
	message.member.send({ embed: help})
	}
}

module.exports.help = {
	name: "yardım"
}
