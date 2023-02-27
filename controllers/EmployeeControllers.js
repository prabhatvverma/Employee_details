
const employee = require("../model/employee");

/**
 * Employe controller
 */
class EmployeeControllers {

    /**
     * Show login page
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async index(req, res, next) {
        res.render('employee/employeedata', { title: 'Express users' });
    }

    /**
     * Show Create form
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async create(req, res, next) {
        res.render('employee/create', {
            title: 'Express users'
        });
    }
    /**
     * Store a new resource in database
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async store(req, res, next) {

        const { first_name, last_name } = req.body;

        console.log(first_name, last_name);
        console.log(req.body);

        const re = employee.create(first_name, last_name);
        console.log("res", re);
        // var uuid = req.body.uuid;
        // var first_name = req.body.first_name;
        // var last_name = req.body.last_name;
        // var father_name = req.body.father_name;
        // var email = req.body.email;
        // var phone_no = req.body.phone_no;
        // var gender = req.body.gender;
        // var state = req.body.state;
        // var district = req.body.district;
        // console.log("=======", uuid);

    }
    /**
     * Show list of Employees
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async login(req, res, next) {
        var rows = employee.get_all();
        console.log("rows", rows);
        res.render('employee/index', {
            title: 'Express users'
        });
    }
}

module.exports = new EmployeeControllers;