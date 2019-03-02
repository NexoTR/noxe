const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    let ember = message.mentions.members.first() || message.member,
     user = member.user;
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
    let embed = new Discord.RichEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setDescription(`${ember}`)
        .setColor(`RANDOM`)
        .setThumbnail(`${user.displayAvatarURL}`)
        .addField('**:date: Katılım Tarihi**:', `${message.member.joinedAt}`)
        .addField('**:red_circle: Durum**:', user.presence.status)
        .addField('**:eight_pointed_black_star: Rolleri**', ember.roles.map(r => `${r}`).join(" | "))
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();

    message.channel.send({ embed: embed });
    return;
}

module.exports.help = {
    name: 'profil'
}