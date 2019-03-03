const Discord = require('discord.js')
const Weather = require('weather.js')
module.exports.run = async (bot, message, args) => {
  
  weather.find({search: args.join(" "), degreeType: 'F'},function(err,result){
    if(err) message.channel.send(err)
  })
  
  var current = result[0].current;
  var location = result[0].current;
  
  const weat = new Discord.RichEmbed()
  .setColor(`RANDOM`)
  .setDescription(`**${current.skytext}**`)
  .setAuthor(`${current.observationpoint} İçin Hava Durumu`)
  .setThumbnail(current.imageUrl)
  message.channel.send(weat)
  
}

module.exports.help = {
  name:"hava"
}
