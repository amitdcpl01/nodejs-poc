exports.userSignupvalidator = (req, res, next) => {
  req.check('name', 'Name is required').notEmpty();
  req.check('email', 'Email must be 3 to 12 character')
    .matches(/.+\@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
      min: 4,
      max: 32
    });
  req.check('password', 'Password is required').notEmpty();
  req.check('password')
    .isLength({ min: 6 })
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('Password must contain a number');
  const errors = req.validationErrors()
  if (errors) {
    const firstError = reeor.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};