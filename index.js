const Discord = require('discord.js');
const client = new Discord.Client();

const skr = {
  id: '377215088635019294',
  bot: false,
  username: 'skr',
  discriminator: '2590',
  avatar: '12afd8756761d5a86a2f6e75510531da',
  lastMessageID: '684057868323782684',
  lastMessageChannelID: '599326049536573453'
};

const feedbackEmbed = (message, author) => new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setAuthor(`${author.username}#${author.discriminator}`, `${author.avatarURL()}`)
  .setTitle('feedback')
  .setDescription(`${message}`)
  .setTimestamp();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.author.bot) return;
    if (msg.content === 'bot help') {
      msg.channel.send('' +
        '```' +
        '   commands\n' +
        'info   Sends information about user in embed format' +
        '```');
    }
    if (msg.content.startsWith('bot avatar')) {
      const user = msg.mentions.users.first();
      if (user) {
        msg.channel.send(`${user.displayAvatarURL({size: 512})}`)
      } else {
        msg.channel.send('Couldn\'t find that user')
      }
    }
    if (msg.content.startsWith('bot feedback')) {
      const feedback = msg.content.split(' ').slice(2).join(' ');
      const members = msg.channel.members;
      const skr = members.find(member => member.id === '377215088635019294');
      skr.send(feedbackEmbed(feedback, msg.author));
    }
    if (msg.content === 'bot hello') {
      msg.channel.send('hello!')
    }
});

client.login('NjgzOTkxMzMzOTYyMjUyMjg4.XlzngQ.mUwJFsrxbT_00lxB7Hyff5HG5JI');
