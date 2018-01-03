const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'discord') {
        message.reply('https://discord.gg/NfCqvFW');
    }    
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('Greetings! Thank you for using Advertisement Elite, it does mean a lot for a server owner to come check us out for help!');
        message.reply('To submit a server from our system we convince you to keep this bot as a verifier from our system.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
