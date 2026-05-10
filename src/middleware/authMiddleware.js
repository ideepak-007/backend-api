import jwt from 'jsonwebtoken';
import { prisma } from '../config/db.js';

const authMiddleware = async (req, res, next) => {
  //Read token from req & check if it is valid
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies?.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res
      .status(401)
      .json({ error: 'Not authorized, no token provided.' });
  }

  try {
    //verify the token & extract the user data
    const extractedData = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: extractedData.id },
    });

    if (!user) {
      return res.status(401).json({ error: 'User no longer exits.' });
    }

    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Not authorized.' });
  }
};

export default authMiddleware;
