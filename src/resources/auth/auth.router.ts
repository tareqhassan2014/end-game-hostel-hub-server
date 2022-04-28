import { Router } from 'express';
import { verifyToken } from '../../library/firebase.admin';
import hostelRouter from '../hostel/hostel.router';
import storeRouter from '../store/store.router';
import { login, signUp, virtualPopulate } from './auth.controller';

const router = Router();

// POST /user/234fad4/hostel
// GET /user/234fad4/hostel
router.use('/:vendorId/store', storeRouter);
router.use('/:adminId/hostel', hostelRouter);

router.post('/signup', signUp);
router.post('/login', verifyToken, login);
router.get('/:email', virtualPopulate);

export default router;
