const axios = require("axios");//.default;
//const TelegramBot = require('node-telegram-bot-api');
// Initialiser le bot Telegram
//const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
console.log("booot");

async function get_stETH_WETH_Price() {
  try {
    console.log("get eth");
    const dexscreenerApiUrl = 'https://api.dexscreener.com/latest/dex/pairs/ethereum/0x4028daac072e492d34a3afdbef0ba7e35d8b55c4';
    const response = await axios.get(dexscreenerApiUrl);
    const pairs = response.data.pairs;
    console.log("get eth");
    const pair = pairs.find(pair =>
      pair.baseToken.symbol === 'stETH' && pair.quoteToken.symbol === 'WETH'
    );
    console.log("pair");
    if (pair) {
      const priceNative = pair.priceNative;
      let msg = '';

      if (priceNative < 0.995) {
        msg = '**stETH < 0.995 in Uniswap V2:**';
        return { msg, priceNative, url: response.data.pair.url };
      } else if (priceNative > 1) {
        msg = '**stETH > 1 in Uniswap V2:**';
        return { msg, priceNative, url: response.data.pair.url };
      }

      
    } else {
      console.error('La paire stETH/WETH n\'a pas été trouvée.');
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du prix depuis Dexscreener:', error.message);
    return null;
  }
}

/*
// Fonction pour envoyer le prix dans le canal Telegram
async function send_stETH_WETH_Price() {
  console.log("send eth");
  const results = await get_stETH_WETH_Price();
  console.log(results);
  if (results && results.priceNative !== null) {
      const message = `${results.msg}\nstETH = ${results.priceNative} WETH \n${results.url}`;
      console.log("succeed eth");

      // Envoyer le message
      bot.sendMessage(chatId, message, { parse_mode: 'Markdown', disable_web_page_preview: true });
  }
}
*/


const sendMessage = require("../../sendMessage");




exports.handler = async (event) => {

  console.log("here been here");
  const { message } = JSON.parse(event.body);
  //await sendMessage(message.chat.id, "I got your message!");

  let msg = "I got your message!";
  console.log("here been there");
  const results = await get_stETH_WETH_Price();

  if (results && results.priceNative !== null) {
    msg = `${results.msg}\nstETH = ${results.priceNative} WETH \n${results.url}`;
    console.log("succeed eth");

  }else{
    msg="nothing";
  }

  setInterval(sendMessage(message.chat.id, msg), 20000);

  //setInterval(() => {sendMessage(message.chat.id, "I got your message!")}, 20000);
  
  /*
  // Utilisez une fonction de rappel pour setInterval
  setInterval(() => {
    console.log("why");
    sendMessage(message.chat.id, msg)
      .catch((error) => {
        console.error('Erreur lors de l\'envoi du message:', error.message || error);
      });
  }, 20000);
  */

  
  return { statusCode: 200 };
};