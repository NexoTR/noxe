const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let sunucu = new Discord.RichEmbed()
  .setColor('#ff6523')
  .setTitle(":grey_question:" + " " + "**" + `${message.guild.name}` + " " + "**Bilgileri**")
  .setThumbnail(message.guild.iconURL())
  .addField(":bust_in_silhouette: **Kurucu**",message.guild.owner.user.username + " " + "#"+ message.guild.owner.user.discriminator)
  .addField(":calendar: **Kuruluş Tarihi**",message.guild.createdAt)
  .addField(":id: **ID**",message.guild.id)
  .addField(":regional_indicator_r: **Rol Sayısı**",message.guild.roles.size)
  message.channel.send(sunucu)
}

module.exports.help = {
  name: "sunucu"
}
