import { createOne, getAll, getOne, updateOne } from '../../utility/factory';
import hostelModel from './hostel.model';

export const getAllHostels = getAll(hostelModel);
export const getHostelBuyId = getOne(hostelModel);
export const createHostel = createOne(hostelModel);
export const updateHostel = updateOne(hostelModel);
