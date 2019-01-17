
import validation from 'validator';

const Categories = [
  'Science',
  'Technology',
  'Engineering',
  'Arts',
  'Mathematic'
];

export default {

  categoryValidator(req, res, next) {
    if (Object.keys(req.body).includes('category')) {
      if (!Categories.includes(req.body.category)) {
        const error = new Error(
          'Invalid category, Enter Science,Technology...');
        error.status = 400;
        return next(error);
      }
      return next();
    }
    return next();
  },

  nameValidator(req, res, next) {
    if (Object.keys(req.body).includes('firstName')) {
      if (!validation.isAlpha(req.body.firstName)) {
        const error = new Error('first Name  must be alphabets');
        error.status = 400;
        return next(error);
      }
    }
    if (Object.keys(req.body).includes('lastName')) {
      if (!validation.isAlpha(req.body.lastName)) {
        const error = new Error('last Name  must be alphabets');
        error.status = 400;
        return next(error);
      }
    }

    if (Object.keys(req.body).includes('firstName')
    || Object.keys(req.body).includes('lastName')) {
      if (Object.keys(req.body).includes('firstName')) {
        if (req.body.firstName.trim().length < 2) {
          const error = new Error(
            'first Name and Last name must be atleast 2 chracter long');
          error.status = 400;
          return next(error);
        }

        if (Object.keys(req.body).includes('lastName')) {
          if (req.body.lastName.trim().length < 2) {
            const error = new Error(
              'first Name and Last name must be atleast 2 chracter long');
            error.status = 400;
            return next(error);
          }
          return next();
        }
        return next();
      }
    }
    return next();
  }

};
