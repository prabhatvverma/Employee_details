class EmployeeControllers{

    /**
     * Show login page
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async index(req, res, next){
        res.render('users/index', {title: 'Express users'});
    }

    /**
     * Show Create form
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async create (req, res, next){
        res.render('users/create', {
            title: 'Express users'
            
        });
    }
    /**
     * Show list of Employees
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async employeedata(req,res,next){
        res.render('users/employeedata',{
            title: 'Express users'
        });
    }
}

module.exports = new EmployeeControllers;