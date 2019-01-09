import express from 'express';
import Users from '../controllers/user';

const {
  getUser,
  updateUser,
  login,
  register
} = Users;

const router = express.Router();

router.route('/:userId')
  .get(getUser)
  .put(updateUser);

router.route('/login')
  .post(login);

router.route('/')
  .post(register);

export default router;