const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Stefan', {type: 'WATCHING'});
  });
  
  client.on('message', msg => {
    if (msg.content === '!mem') {
      msg.channel.send('```Konkurs na mem miesiąca się jeszcze nie skończył! Konkurs skończy się dnia  10.09.2019r```');
    }


    if (msg.content.includes('https://discord.gg/')) { 
      
      msg.author.sendMessage("Zgodnie z regulaminem zakazuję się reklamowania serwerów poza kanałami <#610974847165661200>, <#610974781055172608> i <#610974847165661200>  po uzgodnieniu tego z Administratorem");
      msg.delete(10);
    }
    


  });
  

client.login(config.token);
