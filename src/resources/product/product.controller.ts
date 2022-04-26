import { Request, Response } from 'express';
import { deleteOne, getAll, getOne, updateOne } from '../../utility/factory';
import responseGenerator from '../../utility/responseGenerator';
import { createOne } from './../../utility/factory';
import ProductModel from './product.model';

export const getAllProduct = getAll(ProductModel);
export const createProduct = createOne(ProductModel);
export const updateProduct = updateOne(ProductModel);
export const getProductByID = getOne(ProductModel);
export const deleteProduct = deleteOne(ProductModel);

export const getProductStatistics = async (req: Request, res: Response) => {
    try {
        const stats = await ProductModel.aggregate([
            {
                $match: { star: { $gte: 0 } },
            },
            {
                $group: {
                    // _id: '$star',
                    _id: { $toUpper: '$category' },
                    numProduct: { $sum: 1 },
                    numRating: { $sum: '$starCount' },
                    avgRating: { $avg: '$star' },
                    avgPrice: { $avg: '$price' },
                    minPrice: { $min: '$price' },
                    maxPrice: { $max: '$price' },
                },
            },
            {
                $sort: { avgPrice: 1 },
            },
            // {
            //     $match: { _id: { $ne: 'LAPTOP' } },
            // },
        ]);

        res.status(201).json(
            responseGenerator(stats, 'Product statistic', false)
        );
    } catch (error: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', error.message, true));
    }
};

export const getMonthlyPlan = async (req: Request, res: Response) => {
    try {
        const year = +req.params.year;
        const plan = await ProductModel.aggregate([
            {
                $unwind: '$features',
            },
        ]);
        res.status(200).json({ status: 'success', data: plan });
    } catch (error: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', error.message, true));
    }
};
