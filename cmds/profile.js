const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    let user;
    if (message.mentions.user.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const member = message.guild.member(user);
    
    const profile = new Discord.RichEmbed()
    .setTitle("**" + `${user.username}` + "**" + " " + "#" + `${user.discriminator}`)
    .setColor(`RANDOM`)
    .setThumbnail(message.author.AvatarURL)
    .addField("**Takma Adı**",``${member.nickname !== null ? `${member.nickname}` : : 'Yok')
    .addField(":date: **Katılma Tarihi**",`${member.joinedAt}`)
    .addField("**Bot**", `${user.bot}`)
    .addField(":red_circle: **Durum**", `$user.presence.status}`)
    .addField("**Oynuyor**",`${user.presence.game ? user.presence.game.name : 'Yok'}`)
    .addField("**Rolleri**", `${member.roles.map(roles => `${roles.name}`).join(' | ')}`)c
    message.channel.send({embed : profile});
}

module.exports.help = {
    name: 'profil'
}
