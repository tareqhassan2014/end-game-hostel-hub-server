import { Router } from 'express';
import { updateUserToAdmin } from '../auth/auth.controller';
import {
    createHostel,
    getHostelBuyAdminId,
    getHostelBuyId,
    updateHostel,
} from './hostel.controller';

const router = Router({ mergeParams: true });

router
    .route('/')
    .post(updateUserToAdmin, createHostel)
    .get(getHostelBuyAdminId);
router.route('/:id').get(getHostelBuyId).patch(updateHostel);

export default router;
