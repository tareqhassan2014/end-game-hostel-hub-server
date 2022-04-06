import { NextFunction, Request, Response } from 'express';
import admin from 'firebase-admin';
const serviceAccount = require('./../../serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export async function verifyToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        if (req.headers.authorization?.startsWith('Bearer ')) {
            const token = req.headers.authorization.split(' ')[1];
            const decodedUser = await admin.auth().verifyIdToken(token);
            req.decodedEmail = decodedUser.email;
        }
    } catch (error) {
        console.log(error);
    }

    next();
}
