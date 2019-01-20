import express from 'express';
import { Profile, Follow } from '../controllers';
import {
  verifyToken,
  profileValidations,
  followValidations
} from '../middlewares';

const { interestsValidator, categoryValidator, nameValidator } = profileValidations;
const { updateProfile } = Profile;
const { canFollowUser } = followValidations;
const { addFollower, getFollowing, getFollowers } = Follow;

const router = express.Router();

router.route('/profile')
  .patch(
    verifyToken,
    interestsValidator,
    nameValidator,
    updateProfile
  );

router.route('/profiles/:username/follow')
  .all(verifyToken)
  .post(canFollowUser, addFollower);

router.route('/profile/following')
  .all(verifyToken)
  .get(getFollowing);

router.route('/profile/followers')
  .all(verifyToken)
  .get(getFollowers);

export default router;
