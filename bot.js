const fetch = require('node-fetch');

let min = 30000;
  let max = 60000;
  let Rtime =  Math.floor(Math.random() * (max - min + 1)) + min;

function msg(argument) {
console.log('Done Send in  '+Rtime);
     fetch('http://adsfordiscord.ueuo.com/index.php?pass=2499',{ method: 'POST'})


}
setInterval(msg,Rtime);
