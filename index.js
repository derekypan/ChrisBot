require('dotenv').config()
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PREFIX = config.prefix;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', message => {
	if (message.content === PREFIX + 'ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
        config.count += 1
        console.log(config.count)
    }
})

client.login(TOKEN)