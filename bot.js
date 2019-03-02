//Main Const's
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = "nabacan";	
const prefix = "n!";
const fs = require('fs');
bot.commands = new Discord.Collection();

//Cmds File Reader
fs.readdir("./cmds/", (err, files) => {
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js")
	if(jsfiles.length <= 0) {
		console.log("No Commands To Load!");
		return;
	}

	console.log(`Loading ${jsfiles.length} commands!`);

	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i + 1}: ${f} loaded`);
		console.log(bot.commands);
		bot.commands.set(props.help.name, props);
	});
});

//Status 
bot.on("ready", ready => {
	console.log("Bot is working now...");

	bot.user.setStatus('Online');
	
	bot.user.setGame('Sedatın Buradan Amk Piliç')
}); 

//Command Main
bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);
	
	if(!command.startsWith(prefix)) return;

	let cmd = bot.commands.get(command.slice(prefix.length))
	if(cmd) cmd.run(bot, message, args)
})

bot.login(TOKEN);

