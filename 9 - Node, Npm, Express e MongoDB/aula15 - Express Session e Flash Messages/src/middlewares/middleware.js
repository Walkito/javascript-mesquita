module.exports = (req, res, next) => {
    console.log();
    
    if(req.body.cliente){
        console.log(`Vi que você póstou ${req.body.cliente}`);
    }

    console.log();
    next();
};