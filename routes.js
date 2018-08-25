let aritmeticController = require('./controllers/aritmetic-controller');


module.exports = function (router) {
	
    router.get('/online', (req, res) => res.json(new Date()));
    router.get('/sum/:firstOperating/:secondOperating', aritmeticController.sum);

}