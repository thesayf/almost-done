var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var uid2 = require('uid2');
var User = require(__dirname + '/models/user');
var Driver = require(__dirname + '/models/driver');
var Staff = require(__dirname + '/models/staff');
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

    
module.exports = function(app, User, Contact, Token) {
    
    //routes for the contact list.//
    app.post('/api/contactlist', function (req, res) {
    //    console.log("i received a get request");

        Contact.find({'userID': req.user._id}, function (err, docs) {
          //  console.log(docs);
            res.json({
                success:true,
                message: "Saved",
                status: 1,
                data:docs
            })
        });
    });

    
    app.post('/api/add-contact', function (req, res){
        var contact = new Contact();
        contact.userID = req.user._id;
        contact.organization = req.body.contact.organization;
        contact.name = req.body.contact.name;
    //    console.log(req.body);
        contact.relationship = req.body.contact.relationship;
        console.log(req.body);
        contact.save(function(err, user){
            if(err){
                return done(err);
            }else{
                res.json({
                    success:true,
                    message: "Saved",
                    status: 1
                })
            }
        });
    });

    //app.delete('/api/contactlist/:id', function (req, res) {
    //    var id = req.params.id;
    //    console.log(id);
    //    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
    //          res.json(doc);
    //    })
    //                         
    //});

    //app.get('/api/contactlist/:id', function (req, res) {
    //    var id = req.params.id;
    //    console.log(id);
    //    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    //          res.json(doc);
    //    });
    //                         
    //});


        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        app.get('*', function(req, res) {
            res.render('pages/index');
        });


        app.post("/api/login", passport.authenticate('local'), function(req, res){
            console.log("/api/login");
            console.log(req.user);
//            tokenFunc.issueToken()(req.user, function(err, token) {
//                  if (err) { return next(err); }
//                  res.cookie('remember_me', token, { path: '/', httpOnly: true, maxAge: 604800000 });
//                  return next();
//            });
            res.json(req.user);
        });
    
        app.post("/api/signin", passport.authenticate('local'), function(req, res){
            console.log("/api/signin");
            console.log(req.staff);
            res.json(req.staff);
        });
// logs the user out by deleting the cookie
        app.post("/api/logout", function(req, res){
            req.logOut()
            res.json(req.user);
        });
    
    
// This uses passport to uathenticate based on our parameters
        app.post("/api/login-auth",  function(req, res) {
            res.send(req.isAuthenticated() ? req.user : '0');
            console.log(req.isAuthenticated());
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
    //     res.redirect('/users/' + req.user.username);
        });
    
    //authenitcates staff login
    app.post("/api/signin-auth",  function(req, res) {
            res.send(req.isAuthenticated() ? req.staff : '0');
            console.log(req.isAuthenticated());
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
    //     res.redirect('/users/' + req.user.username);
        });

    //This registers the Users
        app.post("/api/register", function(req, res){
        console.log(req.body.username);
        User.findOne({username: req.body.username}, function(err, user){
            console.log(user);
            if(user){
             return res.json({
                    success: false, 
                    message: "This user already exists"
                });
            }else{
               console.log("were in");
               var user = new User();
                user.username = req.body.username;
                user.password = req.body.password;
                user.email = req.body.email;
                user.businessname = req.body.businessname;
                user.address = req.body.address;
                user.city = req.body.city;
                user.postcode = req.body.postcode;
                user.businesstype = req.body.businesstype;
                user.firstname = req.body.firstname;
                user.lastname = req.body.lastname;
                user.mobile = req.body.mobile;
                user.save(function(err, user){
                    req.login(user, function(err){
                        if(err) {
                            return res.json({
                                success: false, 
                                message: "Sorry you have been unable to login at this time, please try again later"
                            });
                        }   
                        return res.json({
                            success: true,
                        });
                    });
                });
            } //else close
        });
        //var newUser = req.body; 
        //console.log(newUser);
    });
    
    
    //**USERLIST** Displays our users information in the admin User Page. 
     app.post('/api/userlist', function (req, res) {

        User.find({},{password: 0}, function (err, docs) {
            console.log(docs);
            res.json({
                success:true,
                message: "found",
                status: 1,
                data:docs
            })
        });
    });
    
    //**driverlist** Displays our driver information in the admin Driver Page.
     app.post('/api/driverlist', function (req, res) {
    //    console.log("i received a get request");

        Driver.find({},{password: 0}, function (err, docs) {
            console.log(docs);
            res.json({
                success:true,
                message: "found",
                status: 1,
                data:docs
            })
        });
    });
    
    app.post('/api/stafflist', function (req, res) {
    //    console.log("i received a get request");

        Staff.find({},{password: 0}, function (err, docs) {
            console.log(docs);
            res.json({
                success:true,
                message: "found",
                status: 1,
                data:docs
            })
        });
    });

//Signs New drivers up to the platform to allow us to investigate and activate there account.
     app.post("/api/signup", function(req, res){
        console.log("/signup");
        console.log(req.body.username);
        Driver.findOne({username: req.body.username}, function(err, driver){
            console.log(driver);
            if(driver){
             return res.json({
                    success: false, 
                    message: "This user already exists"
                });
            }else{
               console.log("were in");
               var driver = new Driver();
                driver.username = req.body.username;
                driver.password = req.body.password;
                driver.email = req.body.email;
                driver.firstname = req.body.firstname;
                driver.lastname = req.body.lastname;
                driver.mobile = req.body.mobile;
                driver.day = req.body.day;
                driver.month = req.body.month;
                driver.year = req.body.year;
                driver.address = req.body.address;
                driver.city = req.body.city;
                driver.postcode = req.body.postcode;
                driver.vehicle = req.body.vehicle;
                driver.reg = req.body.reg;
                driver.porters = req.body.porters;
                driver.vehiclenumber = req.body.vehiclenumber;
                driver.bank = req.body.bank;
                driver.acc = req.body.acc;
                driver.sc = req.body.sc;
                driver.save(function(err, driver){
                       return res.json({
                            success: true,
                        });
//                    req.login(driver, function(err){
////                        if(err) {
////                            return res.json({
////                                success: false, 
////                                message: "Sorry you have been unable to login at this time, please try again later"
////                            });
////                        }   
//                     
                });
            } //else close
        });
        //var newUser = req.body; 
        //console.log(newUser);
    });
    
    app.post("/api/addstaff", function(req, res){
        console.log("/addstaff");
        console.log(req.body.username);
            Staff.findOne({username: req.body.username}, function(err, staff){
            console.log(staff);
            if(staff){
             return res.json({
                    success: false, 
                    message: "This user already exists"
                });
            }else{
               console.log("were in");
               var staff = new Staff();
                staff.username = req.body.username;
                staff.password = req.body.password;
                staff.email = req.body.email;
                staff.firstname = req.body.firstname;
                staff.lastname = req.body.lastname;
                staff.position = req.body.position;
                staff.save(function(err, staff){
                       return res.json({
                            success: true,
                        });
//                    req.login(driver, function(err){
////                        if(err) {
////                            return res.json({
////                                success: false, 
////                                message: "Sorry you have been unable to login at this time, please try again later"
////                            });
////                        }   
//                     
                });
            } //else close
        });
        //var newUser = req.body; 
        //console.log(newUser);
    });

};


////USER LOCAL STRATEGY!!!!
passport.use(new localStrategy(
    function(username, password, done)
    {
    User.findOne({username: username, password: password}, function(err, user){
        if(user)
        {
            return done(null, user);
        }
    return done(null, false, {message: 'Unable to login'});
    });
        
    }));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });


////STAFF LOCAL STRATEGY!!!!
//passport.use(new localStrategy(
//    function(username, password, done)
//    {
//    Staff.findOne({username: username, password: password}, function(err, staff){
//        if(staff)
//        {
//            return done(null, staff);
//        }
//    return done(null, false, {message: 'Unable to login'});
//    });
//        
//    }));
//
//    passport.serializeUser(function(staff, done) {
//        done(null, staff);
//    });
//    passport.deserializeUser(function(staff, done) {
//        done(null, staff);
//    });


//passport.use(new RememberMeStrategy(
//  function(token, done) {
//    Token.consume(token, function (err, user) {
//      if (err) { return done(err); }
//      if (!user) { return done(null, false); }
//      return done(null, user);
//    });
//  },
//  function(user, done) {
//    var token = generateToken(64);
//    Token.save(token, { userId: user.id }, function(err) {
//      if (err) { return done(err); }
//      return done(null, token);
//    });
//  }
//));
//
//var tokenFunc = {};
//tokenFunc.issueToken = function(token){
//    var token = utils.randomString(64);
//    saveRememberMeToken(token, user.id, function(err){
//        if (err){ return done(err);}
//        return done(null, token)
//            
//    })
//
//}
//
//
//var randomString = function(len) {
//  var buf = []
//    , chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//    , charlen = chars.length;
//
//  for (var i = 0; i < len; ++i) {
//    buf.push(chars[getRandomInt(0, charlen - 1)]);
//  }
//
//  return buf.join('');
//};
//
//var getRandomInt = function (min, max) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
//};
//    
//
//var generateToken = function(number) {
//    return uid(number);
//
//}