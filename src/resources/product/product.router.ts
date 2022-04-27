import { Router } from 'express';
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    getProductByID,
    setStoreId,
    updateProduct,
} from './product.controller';

const router = Router({ mergeParams: true });

router.route('/').get(getAllProduct).post(createProduct);
router.route('/product').post(setStoreId, createProduct);

router
    .route('/:id')
    .get(getProductByID)
    .patch(updateProduct)
    .delete(deleteProduct);
export default router;
