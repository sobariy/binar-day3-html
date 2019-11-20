var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');
const bodyParser = require('body-parser');

//Import the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
//Set up default mongoose connection
var mongoDB = 'mongodb+srv://db_admin:123@miniproj-9z5hv.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function (){
  console.log('success connecting database')
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

//post handler
app.post('/create_article', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// //example creating mongoose models
// const CatSchema = new Schema({
//   name: String,
//   age: {
//     type: Number,
//     required: true,
//     min: (5, 'Terlalu muda miaw'),
//     max: 19
//   }
// });
// // virtual
// CatSchema.virtual('speak').get(function(){
//   console.log (`${this.name} can speak Miaoww..`)
// });

// //methods
// CatSchema.methods.hello = function(){
//   let teks = `Hello, my name ${this.name}, age ${this.age}, miaowwww..`
//   console.log(teks);
// };

// //create model
// const Cat = mongoose.model('Cat', CatSchema )
// const kitty = new Cat({ 
//   name: 'Zac',
//   age: 4 
// });
// // kitty.hello();

// //saving data
// kitty.save(function(err, result){
//   if (err) console.log(err)

//   kitty.hello()
// });
// // call virtual
// kitty.speak

module.exports = app;
