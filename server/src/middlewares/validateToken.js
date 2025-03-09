import jwt from 'jsonwebtoken';
import { AUTH_TOKEN_SECRET } from '../config.js';

export const validateToken = (req, res, next) => {
    const { token } = req.cookies; 

    if (!token) 
        return res.status(401).send('No token found');
    
    jwt.verify(token, AUTH_TOKEN_SECRET, (error, decoded) => {
        if (error)
            return res.status(401).send('Invalid token');

        req.user = decoded;

        next();
    });
}
