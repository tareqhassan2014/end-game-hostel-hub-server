import { Router } from 'express';
import { updateUserToVendor } from '../auth/auth.controller';
import productRouter from '../product/product.router';
import {
    createStore,
    deleteStore,
    getStoreBuyId,
    getStoreBuyVendorId,
    updateStore,
} from './store.controller';

const router = Router({ mergeParams: true });

router.use('/:storeId', productRouter);

router
    .route('/')
    .post(updateUserToVendor, createStore)
    .get(getStoreBuyVendorId);
router.route('/:id').get(getStoreBuyId).patch(updateStore).delete(deleteStore);

export default router;
