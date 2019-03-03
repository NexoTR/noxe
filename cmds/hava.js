const Discord = require('discord.js')
const weahter = require('weather.js')

module.exports.run = async (bot, message, args) => {
	weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
		if (err) return message.channel.send(err);

		var current = result[0].current;
		var location = 	result[0].location;

		const weat = new Discord.RichEmbed()
		.setDescription(`**${current.skytext}**`)
		.setAuthor(`${current.observationpoint} İçin Hava Durumu`)
		.setThumbnail(current.imageUrl)
		.setColor(`RANDOM`)
		.addField('Saat Dilimi', `UTC${location.timezone}`,true)
		.addField('Derece',location.degreetype,true)
		.addField('Sıcaklık',`${current.temperature} Derece`,true)
		.addField('Hissetirdiği',`${current.feelslike} Derece`,true)
		.addField('Rüzgarlar',current.winddisplay,true)
		.addField('Nem',`${current.humidity}%`,true)
		message.channel.send(weat);
	});
}

module.exports.help = {
	name:"havadurumu"
}