/*
const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    // Remplacez 'YOUR_BOT_TOKEN' par le token de votre bot Telegram
    const botToken = process.env.BOT_TOKEN;
    const chatId = '-4024637922'; //JSON.parse(event.body).message.chat.id; //'YOUR_CHAT_ID'; // Remplacez par l'ID de chat de la conversation où vous voulez envoyer le message

    const message = 'Hello from your Netlify bot!'; // Message à envoyer

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
*/