import { NextFunction, Request, Response } from 'express';
import { deleteOne, getAll, getOne, updateOne } from '../../utility/factory';
import { createOne } from './../../utility/factory';
import ProductModel from './product.model';

export const getAllProduct = getAll(ProductModel);
export const createProduct = createOne(ProductModel);
export const updateProduct = updateOne(ProductModel);
export const getProductByID = getOne(ProductModel);
export const deleteProduct = deleteOne(ProductModel);

export const setStoreId = (req: Request, res: Response, next: NextFunction) => {
    // Allow nested routes
    if (!req.body.store) req.body.store = req.params.storeId;

    next();
};
