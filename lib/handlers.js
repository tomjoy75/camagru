const fortune = require('./fortune');

exports.home = (req, res) => res.render('home');
exports.about = (req, res) => res.render('about', {fortune: fortune.getFortune()});
exports.login = (req, res) => res.render('login');
exports.register = (req, res) => res.render('register');
exports.notFound = (req, res) => {
    res.render('404');
    // res.status(404);
    // res.render('404');
}
exports.serverError = (err, req, res, next) => {
    res.render('500');
    console.error(err.message)
    // res.status(500);
}