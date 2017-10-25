const Addnime = require('../models/addnime');

function indexRoute(req, res, next) {
  Addnime
    .find()
    .populate('createdBy')
    .exec()
    .then((addnimes) => res.render('addnimes/index', { addnimes }))
    .catch(next);
}

function newRoute(req, res) {
  return res.render('addnimes/new');
}

function createRoute(req, res, next) {

  req.body.createdBy = req.user;

  Addnime
    .create(req.body)
    .then(() => res.redirect('/addnimes'))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/addnimes/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function showRoute(req, res, next) {
  Addnime
    .findById(req.params.id)
    .populate('comments.createdBy')
    .populate('createdBy')
    .exec()
    .then((addnime) => {
      if(!addnime) return res.notFound();
      return res.render('addnimes/show', { addnime });
    })
    .catch(next);
}

function editRoute(req, res, next) {
  Addnime
    .findById(req.params.id)
    .exec()
    .then((addnime) => {
      return res.render('addnimes/edit', { addnime });
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Addnime
    .findById(req.params.id)
    .exec()
    .then((addnime) => {
      if(!addnime) return res.notFound();

      for(const field in req.body) {
        addnime[field] = req.body[field];
      }

      return addnime.save();
    })
    .then(() => res.redirect(`/addnimes/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/addnimes/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Addnime
    .findById(req.params.id)
    .exec()
    .then((addnime) => {
      if(!addnime) return res.notFound();
      return addnime.remove();
    })
    .then(() => res.redirect('/addnimes'))
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Addnime
    .findById(req.params.id)
    .exec()
    .then((addnime) => {
      if(!addnime) return res.notFound();

      addnime.comments.push(req.body); // create an embedded record
      return addnime.save();
    })
    .then((addnime) => res.redirect(`/addnimes/${addnime.id}`))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Addnime
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then((addnime) => {
      if(!addnime) return res.notFound();
      // if (!addnime.belongsTo(req.user)) return res.unauthorized('You do not have permission to delete!');
      // get the embedded record by it's id
      const comment = addnime.comments.id(req.params.commentId);
      comment.remove();

      return addnime.save();
    })
    .then((addnime) => res.redirect(`/addnimes/${addnime.id}`))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
