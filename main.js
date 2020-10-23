const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';


function on_ready() {
    console.log('DicordBot is ONLINE');
    let now = new Date();
    let target = new Date()
    target.setSeconds(target.getSeconds() + 5);
    setTimeout(() => {console.log('Reminder!');}, target - now);
}

function on_message_received(message) {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'hello') {
        message.channel.send('Hello friend!');
    }
}

client.on('message', message => on_message_received(message));

client.once('ready', on_ready);
















client.login('Place your Bot token here! AND DONT PUSH TO GIT');
