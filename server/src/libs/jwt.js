import jwt from 'jsonwebtoken';
import { AUTH_TOKEN_SECRET } from '../config.js';

function getAuthToken(payload) { 
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            
            AUTH_TOKEN_SECRET,
            
            { expiresIn: "1d" },

            (e, token) => { 
                if (e)
                    reject(e);
                
                resolve(token);
            }
        )
    });
}

export default getAuthToken;
