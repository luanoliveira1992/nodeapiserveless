const exception = require('../errors');
const isNumber = require('is-number');

module.exports.sum = async (req, res, next) => {
    try {
        let firstOperating = req.params.firstOperating;
        let secondOperating = req.params.secondOperating;

        if (isNumber(firstOperating) && isNumber(secondOperating)) {
             let amount = parseFloat(firstOperating) + parseFloat(secondOperating);
             res.json({ result: amount });
        } else {
            throw new exception.InvalidParams();
        }

    } catch (error) {
        next(exception.getKnownError(error));

    }

}