// dotenv k sth ek problem hai ki jb import stetement ka use kr rhe hote ho 
// to jis file k andar dotenv.config() ko call karte ho 
// sirf usi file ke andar environmental variables ka use kr skte ho

import dotenv from "dotenv";

dotenv.config();

// normal middleware (e.g. identifyUser) me 3 parameters paas hote hai req, res, next
// error handling middleware me 4 parameteres pass hote hai err, req, res, next

function handleError(err, req, res, next) {
    const response = {
        message: err.message
    }
    if (process.env.NODE_ENVIRONMENT === "development") {
        response.stack = err.stack
    }
    res.status(err.status).json(response)
}

export default handleError;
