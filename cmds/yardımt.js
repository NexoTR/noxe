const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
	let fun = new Discord.RichEmbed()
	.setColor(`RANDOM`)
	.addField("Temel Komutlar","• n!profil [Etiket] - Etiketlenen Kullanıcının Profilini Gösterir. \n • n!avatar [Etiket] - Etiketlenen Kullanıcının Avatarını Gösterir. \n • n!bot - Botun Bilgilerini Gösterir. \n • n!kurucu - Sunucunun Kurucusunu Gösterir.")
	message.channel.send(fun)
}

module.exports.help = {
	name:"yardım temel"
}