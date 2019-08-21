const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!pomoc');
        message.reply('Cześć ta komenda jest jeszcze nie skończona!');
  	}
    if (message.content === '!info');
        message.channel.send('Cześć jestem stefan');
        message.channel.send('Może ci pomóc: !pomoc');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
