const express = require('express')
const app = express();
const port = 3000
app.get ('/',(req, res)=> res.send('ciao'))

app.listen(port, () =>
console.log('Il tuo bot è ascoltato da http://localhost:${port}'))


require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();



//TOKEN
client.login(process.env.MODTOKEN);
const serverID = process.env.SERVERID;



// set attivo
client.on ('ready', readyDiscord);
function readyDiscord() {
    console.log('💖');
  }
  
  
  // POSSIBILI RISPOSTE
  const replies = [
    'quanto ti devo padrone?',
    '*ultimo respiro*',
    'mammaaaa'
  ]
  
  client.on('message', gotMessage);
  
  function gotMessage(msg) {
    if (msg.channel.id == '789805752910086155' && msg.content === 'blop') {
      
      // ciclo casuale
      const index = Math.floor(Math.random() * replies.length);
      msg.channel.send(replies[index]);
    }
  }





































