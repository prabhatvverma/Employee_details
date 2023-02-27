var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.set('views','./users');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//DATABASE
var con = require('./config/db');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function (req, res) {
  var uuid = req.body.uuid;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var father_name = req.body.father_name;
  var email = req.body.email;
  var phone_no = req.body.phone_no;
  var gender = req.body.gender;
  var state = req.body.state;
  var district = req.body.district;


  connection.connect(function (err) {
    if (err) throw err;

    var sql = "INSERT INTO employees(uuid, first_name, last_name,father_name,phone_no,email,gender,state,district) VALUES('" + uuid + "','" + first_name + "','" + last_name + "','" + father_name + "', '" + email + "', '" + phone_no + "' ,'"+gender+"','" + state + "', '" + district + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send('student registred '+result.insertId);
    })
  });

})

module.exports = app;

app.listen(3000, function () {
  console.log("server is running ....");
})