const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Komutanım HAZIRIM! ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('as');
  }
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.channel.sendMessage('Hoşgeldin!');
  }
if (!msg.content.startsWith(prefix)){
  return;
}
  if(msg.content.toLowerCase() === prefix + 'komutlar' ) {
    msg.reply('şimdilik yok')
  }
});

client.login('NjcxMzE1MDE4OTk4MDg3Njkw.Xi7oXA.hZ69MAjz39ip_PKmgtXQlYL7ZA4');
