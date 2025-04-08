const axios = require('axios');

async function sendMessage(to, message) {
  const payload = {
    phone: to,
    message,
  };

  await axios.post(`${process.env.WAHA_URL}/sendMessage`, payload);
}

module.exports = { sendMessage };
