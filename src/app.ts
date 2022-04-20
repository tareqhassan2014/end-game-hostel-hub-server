import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import { Server } from 'http';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { notFound } from './middleware/error';
import authRoute from './resources/auth/auth.router';
import hostelRoute from './resources/hostel/hostel.router';
import productRoute from './resources/product/product.router';
import storeRoute from './resources/store/store.router';
import { globalErrorHandler } from './utility/globalErrorHandler';

class App {
    public express: Application;

    constructor(public port: number, private uri: string) {
        this.uri = uri;
        this.port = port;
        this.express = express();
        this.initializeDataBaseConnection();
        this.initializeMiddleWare();
        this.initializeControllers();
    }

    private initializeMiddleWare(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }

    private async initializeDataBaseConnection(): Promise<void> {
        try {
            await mongoose.connect(this.uri);
            console.log('database connected successfully');
        } catch (error: any) {
            console.log(error.message);
        }
    }

    private initializeControllers() {
        this.express.use('/api/v1/product', productRoute);
        this.express.use('/api/v1/auth', authRoute);
        this.express.use('/api/v1/hostel', hostelRoute);
        this.express.use('/api/v1/store', storeRoute);
        this.express.all('*', notFound);
        this.express.use(globalErrorHandler);
    }

    public listen(): Server {
        return this.express.listen(this.port, () =>
            console.log(`server is running http://localhost:${this.port}/`)
        );
    }
}

export default App;
