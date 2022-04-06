/* eslint-disable func-names */
import { model, Schema } from 'mongoose';
import IUser from './auth.interface';

const UserModel = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required!'],
            trim: true,
            lowercase: true,
            unique: true,
        },
        phone: {
            type: String,
        },
        role: {
            type: String,
            default: 'pending',
            enum: ['pending', 'admin', 'moderator', 'vendor', 'user'],
        },
        status: {
            type: String,
            default: 'pending',
            enum: ['pending', 'verified', 'blocked'],
        },
        img: {
            type: String,
            default: 'https://i.ibb.co/dBQjP3N/profile.png',
        },
    },
    { timestamps: true }
);

export default model<IUser>('User', UserModel);
