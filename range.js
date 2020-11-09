module.exports = (req, res, next) => {
    res.header('content-range', 'posts 0-20/20')
    next();
}