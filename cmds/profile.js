const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    message.channel.send('**:warning: Kullanılabilir Değil !**');
}

module.exports.help = {
    name: 'profil'
}
