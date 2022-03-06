require('dotenv').config();
const jwt = require('jsonwebtoken');

const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = process.env;
const customError = require('../utils/customError');


const authorization = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
        return next(new customError(401, 'Token is required'));
    }
    const user = await jwt.verify(token, ACCESS_TOKEN_SECRET);
    if (!user) {
        return next(new customError(403, 'Token is not valid!'));
    }
    req.user = user;
    next();
}

module.exports = authorization;