import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from '../../utility/factory';
import storeModel from './store.model';

export const getAllStores = getAll(storeModel);
export const getStoreBuyId = getOne(storeModel);
export const createStore = createOne(storeModel);
export const updateStore = updateOne(storeModel);
export const deleteStore = deleteOne(storeModel);
