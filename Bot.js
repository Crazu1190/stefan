const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!pomoc');
        message.reply('Cześć ta komenda jest jeszcze nie skończona!');
  	}
    if (message.content === '!info');
        messageml.channel.send('Cześć jestem **Stefan** jestem botem zostałem stworzony dla tego serwera przez Crazy1190 pamiętaj , że jestem w wersji 1.0 **Beta** i mogę mieć dużo błędów pomoge ci po komendą **!pomoc**');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
