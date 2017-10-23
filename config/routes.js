const express = require('express');
const router  = express.Router();
const sessionsController = require('../controllers/sessions');
const registrationController = require('../controllers/registration');
const addnimesController = require('../controllers/addnimes');
// const secureRoute = require('../lib/secureRoute');
//
// // A home route
router.get('/', (req, res) => res.render('statics/index'));

router.route('/register')
.get(registrationController.new)
.post(registrationController.create);

// router.route('/login')
// .get(sessionsController.new);

router.route('/addnimes')
  .get(addnimesController.index);
  // .post(secureRoute, addnimesController.create);
//
// router.route('/addnimes/new')
//   .get(secureRoute, addnimesController.new);
//
// router.route('/addnimes/:id')
//   .get(addnimesController.show)
//   .put(secureRoute, addnimesController.update)
//   .delete(secureRoute, addnimesController.delete);
//
// router.route('/addnimes/:id/edit')
//   .get(secureRoute, addnimesController.edit);
//
// router.route('/addnimes/:id/comments')
//   .post(secureRoute, addnimesController.createComment);
//
// router.route('/addnimes/:id/comments/:commentId')
//   .delete(secureRoute, addnimesController.deleteComment);
//
// router.route('/register')
//   .get(registrationController.new)
//   .post(registrationController.create);
//
// router.route('/login')
//   .get(sessionsController.new)
//   .post(sessionsController.create);
//
// router.route('/logout')
//   .get(sessionsController.delete);
//
// router.all('*', (req, res) => res.notFound());
//
module.exports = router;
