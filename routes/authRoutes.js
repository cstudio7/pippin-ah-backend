import express from 'express';
import Users from '../controllers/user';
import { userValidations } from '../middlewares';
import {
  googleStrategy,
  facebookStrategy,
  twitterStrategy
} from '../config/strategies';

const {
  expectedParamsValidator,
  nonEmptyParamsValidator,
  emailExistsValidator,
  usernameExistsValidator,
  emailIsValid,
  isUsernameValidator,
  passwordValidator,
  loginParamsValidator,
  loginNonEmptyParamsValidator,
  invalidCredentials
} = userValidations;

const {
  login,
  register
} = Users;

const {
  googleAuthenticate,
  googleRedirect,
  googleOnAuthSuccess
} = googleStrategy;

const {
  fbAuthenticate,
  fbRedirect,
  fbOnAuthSuccess
} = facebookStrategy;
const {
  twitterAuthenticate,
  twitterRedirect,
  twitterOnAuthSuccess,
} = twitterStrategy;

const router = express.Router();

router.route('/')
  .post(
    expectedParamsValidator,
    nonEmptyParamsValidator,
    emailIsValid,
    isUsernameValidator,
    passwordValidator,
    emailExistsValidator,
    usernameExistsValidator,
    register
  );

router.route('/login')
  .post(
    loginParamsValidator,
    loginNonEmptyParamsValidator,
    invalidCredentials,
    login
  );

router.route('/google')
  .get(googleAuthenticate);

router.route('/google/redirect')
  .get(googleRedirect, googleOnAuthSuccess);

router.route('/twitter')
  .get(twitterAuthenticate);

router.route('/twitter/redirect')
  .get(twitterRedirect, twitterOnAuthSuccess);

router.route('/facebook')
  .get(fbAuthenticate);

router.route('/facebook/redirect')
  .get(fbRedirect, fbOnAuthSuccess);


export default router;
