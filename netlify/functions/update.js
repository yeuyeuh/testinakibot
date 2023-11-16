const sendMessage = require("../../sendMessage");


exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  await sendMessage(message.chat.id, "I got your message!");
  
  // Déclencher la fonction toutes les minutes
  setInterval(() => {
    sendMessage(message.chat.id, "I got your message!");
  }, 10 * 1000); // 1 minute en millisecondes

  return { statusCode: 200 };
};