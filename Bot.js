const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!pomoc') {
    	message.channel.send(' ');
        message.channel.send('Ups...');
        message.channel.send('Ta komenda jest jeszcze nie skończona!');
        message.channel.send(' ');
  	}
    if (message.content === '!info') {
        message.channel.send('■■■■■■■■■■■■');
        message.channel.send('Czesc jestem Stefan');
        message.channel.send('zostałem stworzony przez Crazy1190');
        message.channel.send('Pisze w języku polskim');
        message.channel.send('Jestem w wersji 1.0 Beta');
        message.channel.send('■■■■■■■■■■■■');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
