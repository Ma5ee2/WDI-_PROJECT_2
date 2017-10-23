function staticsHome(req, res) {
	res.render('statics/homepage');
}

module.exports = {
	homepage: staticsHome
}
