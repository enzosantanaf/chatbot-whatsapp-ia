require('dotenv').config();
const express = require('express');
const app = express();
const { getChatGPTReply } = require('./services/openai');
const { sendMessage } = require('./services/waha');

app.use(express.json());

app.post('/webhook', async (req, res) => {
  const body = req.body;
  const text = body.message?.text || '';
  const from = body.sender?.number || '';

  if (!text) return res.sendStatus(200);

  const reply = await getChatGPTReply(text);
  await sendMessage(from, reply);

  res.sendStatus(200);
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
