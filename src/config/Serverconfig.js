const dotenv=require('dotenv');
dotenv.config();


module.exports = {
    PORT: process.env.PORT || 3004 // Defaulting to port 3000 if PORT is not specified in the environment
};
