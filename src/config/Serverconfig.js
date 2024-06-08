const dotenv=require('dotenv');
dotenv.config();


module.exports = {
    PORT: process.env.PORT || 3004,
    EMAIL_ID:process.env.EMAIL_ID||'spks1622@gmail.com',
    EMAIL_PASS:process.env.Email_PASS||'kpjc okvb wpna qrtp'

};
