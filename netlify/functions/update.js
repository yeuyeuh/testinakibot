const sendMessage = require("../../sendMessage");


exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  //await sendMessage(message.chat.id, "I got your message!");
  setInterval(sendMessage(message.chat.id, "I got your message!"), 1200000);
  
  return { statusCode: 200 };
};