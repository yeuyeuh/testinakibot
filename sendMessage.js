const axios = require("axios");//.default;

module.exports = async (chat_id, text) => {
  console.log("text : ", text);
  try {
    if (text != "nothing") {
      await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        chat_id,
        text,
        parse_mode:Markdown,
        disable_web_page_preview: true,
      });
    } else {
      await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        chat_id,
        text: "*Nothing for the moment but searching...*",
        parse_mode:Markdown,
        disable_web_page_preview: true,
      });
    }
    return true;
  } catch (error) {
    console.error("Error YeuYEUH in message", error.message || error);
    return false;
  }
};
