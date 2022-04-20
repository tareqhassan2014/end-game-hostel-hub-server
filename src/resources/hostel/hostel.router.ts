import { Router } from 'express';
import {
    createHostel,
    getAllHostels,
    getHostelBuyId,
    updateHostel,
} from './hostel.controller';

const router = Router();

router.route('/').post(createHostel).get(getAllHostels);
router.route('/:id').get(getHostelBuyId).patch(updateHostel);

export default router;
