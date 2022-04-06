import { Router } from 'express';
import { verifyToken } from '../../library/firebase.admin';
import { login, signUp } from './auth.controller';

const router = Router();

router.post('/signup', signUp);
router.post('/login', verifyToken, login);
// router.get(
//     '/auth-user',
//     passport.authenticate('jwt', { session: false }),
//     accessControl.grantAccess('readOwn', 'profile'),
//     AuthController.authUser
// );
export default router;
