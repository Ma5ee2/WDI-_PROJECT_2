const User = require('../models/user');


function registrationNew(req, res) {
  return res.render('registrations/new');
}

function registrationCreate(req, res, next) {
  User
    .create(req.body)
    .then((user) => res.redirect('/login'))
    .catch((err) => {
      if(err.username === 'ValidationError') return res.badRequest('/register', err.toString());
      next(err);
    });
}

module.exports = {
  new: registrationNew,
  create: registrationCreate
};
