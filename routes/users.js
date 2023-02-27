var express = require('express');
var router = express.Router();

const EmployeeControllers = require("../controllers/EmployeeControllers");

/* GET users listing. */
// router.get('/index', EmployeeControllers.index);
router.get('/', EmployeeControllers.index);

router.get('/create', EmployeeControllers.create);

router.post('/store', EmployeeControllers.store);

 
router.get('/login', EmployeeControllers.login);
 

module.exports = router;