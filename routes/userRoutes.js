import express from 'express';
import { Users, Request } from '../controllers';
import { verifyToken, userValidations, requestValidations } from '../middlewares';

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
  activateUser,
  getAllAuthors
} = Users;

const { requestMentorship } = Request;
const { canRequestMentorship } = requestValidations;

const router = express.Router();
router.route('/activate/:userId')
  .get(activateUser);

router.route('/')
  .all(verifyToken)
  .get(getUser)
  .patch(
    passwordValidator,
    isUsernameValidator,
    usernameExistsValidator,
    emailIsValid,
    emailExistsValidator,
    updateUser
  );

router.route('/authors')
  .get(verifyToken, getAllAuthors);

router.route('/request')
  .post(verifyToken, canRequestMentorship, requestMentorship);

export default router;
