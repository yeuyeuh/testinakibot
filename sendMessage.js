const axios = require("axios");//.default;

module.exports = async (chat_id, text) => {
  console.log("text : ", text);
  try {
    if (text !== "nothing") {
      await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        chat_id,
        text,
      });
    } else {
      await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        chat_id,
        text: "**Nothing for the moment but searching...**",
      });
    }
    return true;
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error.message || error);
    return false;
  }
};
