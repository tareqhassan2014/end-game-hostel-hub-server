import { Router } from 'express';
import {
    createStore,
    deleteStore,
    getAllStores,
    getStoreBuyId,
    updateStore,
} from './store.controller';

const router = Router();

router.route('/').post(createStore).get(getAllStores);
router.route('/:id').get(getStoreBuyId).patch(updateStore).delete(deleteStore);

export default router;
