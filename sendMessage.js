const axios = require("axios");//.default;

module.exports = async (chat_id, text) => {
  if(text!=""){
    await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      chat_id,
      text,
    });
  }else{
    await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      chat_id,
      "**Nothing for the moment but searching...**",
    });
  }


  return true;
};
