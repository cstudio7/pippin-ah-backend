import passport from 'passport';
import Strategy from 'passport-twitter';
import { Users } from '../../controllers';
import { twitterMockStrategy } from './mockStrategy';

const { processSocialUser } = Users;

const strategy = new Strategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: '/api/v1/users/twitter/redirect',
  includeEmail: true
},
(accessToken, refreshToken, profile, done) => {
  done(null, {
    email: profile.emails[0].value,
    imageUrl: profile.photos[0].value
  });
});

const isTest = process.env.NODE_ENV === 'test';

export default {
  init() {
    passport.use(isTest ? twitterMockStrategy : strategy);
  },

  twitterAuthenticate: passport.authenticate(
    'twitter', { scope: ['include_email =true'] }
  ),

  twitterRedirect: passport.authenticate('twitter',
    {
      failureRedirect: '/api/v1/users/twitter/redirect',
      session: false
    }),

  twitterOnAuthSuccess: processSocialUser
};
