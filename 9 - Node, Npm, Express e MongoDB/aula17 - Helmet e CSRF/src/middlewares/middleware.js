module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local';
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.crsftToken();
}

exports.checksCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.send('ABCD');
    }
}