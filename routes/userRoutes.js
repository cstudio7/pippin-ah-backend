import express from 'express';
import Users from '../controllers/user';
import { verifyToken, userValidations } from '../middlewares';

const {
  emailIsValid,
  emailExistsValidator,
  isUsernameValidator,
  usernameExistsValidator,
  passwordValidator
} = userValidations;

const {
  getUser,
  updateUser,
  activateUser
} = Users;

const router = express.Router();
router.route('/:userId')
  .get(activateUser);

router.route('/user')
  .all(verifyToken)
  .get(getUser)
  .patch(
    passwordValidator,
    isUsernameValidator,
    usernameExistsValidator,
    emailIsValid,
    emailExistsValidator,
    updateUser);

export default router;
