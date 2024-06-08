const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3004,
    EMAIL_ID: process.env.EMAIL_ID || 'spks1622@gmail.com',
    EMAIL_PASS: process.env.EMAIL_PASS|| 'kpjc okvb wpna qrtp',
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL|| 'ampqs://localhost',
    EXCHANGE_NAME: process.env.EXCHANGE_NAME|| 'AIRLINE_BOOKING',
    REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY|| 'REMINDER SERVICE'
};