const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    let user;
    if (message.mentions.users.first()){
        user = message.mentions.users.first()
    } else {
        user = message.author;
    }
    
    const member = message.guild.member(user);
    
    const profile = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setThumbnail(message.author.avatarURL)
    .setTitle("**" + `${user.username}` + "**" + " " + "#" + `${user.discriminator}` + " " + "**Profili**")
    .addField("**Takma Adı**", `${member.nickname !== null ? `${member.nickname}` : 'Yok'}`)
    .addField("**:date: Katılım Tarihi**",`${member.joinedAt}`)
    .addField("**Rolleri**",`${member.roles.map(roles => `${roles}.name`).join(' | ')}`)
    .addField("**Oynuyor**",`${user.presence.game ? user.presence.game.name : 'Yok'}`)
    .addField("**:red_circle: Durum**", `${user.presence.status}`)
    message.channel.send(profile)
    
}

module.exports.help = {
    name: 'profil'
}
