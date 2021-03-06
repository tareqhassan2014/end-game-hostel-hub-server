import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../utility/appError';
import { catchAsync } from '../../utility/catchAsync';
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from '../../utility/factory';
import storeModel from './store.model';

export const getAllStores = getAll(storeModel);
export const getStoreBuyId = getOne(storeModel, { path: 'products' });
export const createStore = createOne(storeModel);
export const updateStore = updateOne(storeModel);
export const deleteStore = deleteOne(storeModel);

export const getStoreBuyVendorId = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const store = await storeModel.find({ vendor: req.params.vendorId });

        if (!store) {
            return next(new AppError('No Store found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data: {
                data: store,
            },
        });
    }
);
