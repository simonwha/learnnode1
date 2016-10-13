var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res){
	res.render('helloworld', { title: 'Hello, World!'});
});

router.post('/accept-form-submission', function(req, res) {
    var fields = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		hs_context: req.body.hs_context
	};
	request.post('https://forms.hubspot.com/uploads/form/v2/471490/97b0128f-7fd2-430f-a03c-533c5627457a').form(fields);

    res.render('helloworld', { title: 'Hello, ' + req.body.firstname });
});


module.exports = router;
