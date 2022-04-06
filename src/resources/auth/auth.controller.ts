import { Request, Response } from 'express';
import responseGenerator from '../../utility/responseGenerator';
import UserModel from './auth.model';

export const signUp = async (req: Request, res: Response) => {
    try {
        const ExistingUser = await UserModel.findOne({
            email: req.body.email,
        });

        if (ExistingUser) {
            return res.json({ user: ExistingUser });
        }

        const user = await UserModel.create(req.body);

        return res.json({ user });
    } catch (err: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', err.message, true));
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const email = req.decodedEmail;
        const user = await UserModel.findOne({ email });
        return res.json({ user });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
};
