const sendMessage = require("../../sendMessage");


exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  //await sendMessage(message.chat.id, "I got your message!");
  //setInterval(sendMessage(message.chat.id, "I got your message!"), 1200000);

  // Utilisez une fonction de rappel pour setInterval
  setInterval(() => {
    sendMessage(message.chat.id, "I got your message!")
      .catch((error) => {
        console.error('Erreur lors de l\'envoi du message:', error.message || error);
      });
  }, 10000);

  
  return { statusCode: 200 };
};