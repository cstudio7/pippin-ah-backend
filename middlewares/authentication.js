import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET_KEY;

const time = { expiresIn: '72hrs' };
const generateToken = payload => jwt.sign({ payload }, secret, time);

const verifyToken = (req, res, next) => {
  const token = req.headers.accesstoken;
  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      error = new Error('Invalid authencation! Can you check and try again?');
      error.status = 401;
      return next(error);
    }
    req.decoded = decoded;
    return next();
  });
};

export { generateToken, verifyToken };
