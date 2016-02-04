// Ctrl For Home
app.controller('HomeCtrl', function($scope) {

})

// Ctrl For Signup
app.controller('DashSignupCtrl', function($scope, $http, $rootScope) {
    $scope.register = function(user){
        console.log(user);
    //todo verify if the passwords are the same
    if(user.password == user.password2)
    {
        $http.post('/api/register', user)
        .success(function(user){
            $rootScope.currentUser = user;
            console.log(user);
        });
    };
    };
})


// Ctrl For Login
app.controller('DashLoginCtrl', function($scope, $http, $rootScope, $location) {
    $scope.login = function(user, $event){
        $event.preventDefault();
        console.log(user);
        $http.post('/api/login', user)
        .success(function(response){
            $location.url("/dash");
            console.log(response);
            $rootScope.currentUser = user;
        
        });
    };
})

app.controller('StaffSigninCtrl', function($scope, $http, $rootScope, $location) {
    $scope.signin = function(staff, $event){
        $event.preventDefault();
        console.log(staff);
        $http.post('/api/signin', staff)
        .success(function(response){
            $location.url("/admin");
            console.log(response);
            $rootScope.currentStaff = staff;
        
        });
    };
})

// Ctrl For Dash
app.controller('DashHomeCtrl', function($scope, dash) {
})

app.controller('DashadminCtrl', function($scope, dash) {
})

app.controller('DashusersCtrl', function($scope, $http) {
    
      $scope.displayOneUser = function(id) {
        var temp = $scope.users.filter(function(ele){
            return ele._id == id;
        })
        $scope.username = temp[0]["username"];
        $scope.email = temp[0]["email"];
        $scope.address = temp[0]["address"];
        $scope.city = temp[0]["city"];
        $scope.postcode = temp[0]["postcode"];
        $scope.bank = temp[0]["bank"];
        $scope.acc = temp[0]["acc"];
        $scope.sc = temp[0]["sc"];
        
        
        console.log(temp[0]["username"]);
    }; 
    
    
    var refresh = function() {
        $http.post('/api/userlist').success(function(response) {
            $scope.users = response.data;
            console.log($scope.users);
        });
    };
     
     refresh();
     
})

app.controller('DashdriversCtrl', function($scope, $http) {

    $scope.displayOneDriver = function(id) {
        var temp = $scope.drivers.filter(function(ele){
            return ele._id == id;
        })
        $scope.username = temp[0]["username"];
        $scope.email = temp[0]["email"];
        $scope.day = temp[0]["day"];
        $scope.month = temp[0]["month"];
        $scope.year = temp[0]["year"];
        $scope.address = temp[0]["address"];
        $scope.city = temp[0]["city"];
        $scope.postcode = temp[0]["postcode"];
        $scope.reg = temp[0]["reg"];
        $scope.bank = temp[0]["bank"];
        $scope.acc = temp[0]["acc"];
        $scope.sc = temp[0]["sc"];
        
        
        console.log(temp[0]["username"]);
    };

    
    var refresh = function() {
        $http.post('/api/driverlist').success(function(response) {
            $scope.drivers = response.data;
            console.log($scope.drivers);
        });
    };
     
     refresh();
     
    
})

app.controller('DashdriversearningsCtrl', function($scope, dash) {
})

app.controller('DashstaffCtrl', function($scope, staff, $http, $rootScope) {
    $scope.staff = staff;
    $scope.addstaff = function(){
        console.log(staff);
    //todo verify if the passwords are the same
    if(staff.password == staff.password2){
        $http.post('/api/addstaff', staff)
        .success(function(staff){
            $rootScope.currentUser = staff;
            console.log(staff);
        });
    };
    };
    
    var refresh = function() {
        $http.post('/api/stafflist').success(function(response) {
            $scope.stafflist = response.data;
            console.log($scope.stafflist);
        });
    };
     
     refresh();
    
})
    

app.controller('ContractorSignupCtrl', function($scope, $http, $rootScope, driver) {
    $scope.driver = driver;
    $scope.signup = function(){
        console.log(driver);
    //todo verify if the passwords are the same
    if(driver.password == driver.password2){
        $http.post('/api/signup', driver)
        .success(function(driver){
            $rootScope.currentUser = driver;
            console.log(driver);
        });
    };
    };
    
})

app.controller('AdminHomeCtrl', function($scope, $http) {
   
     var refresh = function() {
        $http.post('/api/driverlist').success(function(response) {
            var driverCount = Object.keys(response.data).length
            $scope.drivers = driverCount;
            console.log($scope.drivers);
        });
    };
     
    var refine = function() {
        $http.post('/api/userlist').success(function(response) {
            var userCount = Object.keys(response.data).length
            $scope.users = userCount;
            console.log($scope.users);
        });
    };

     refresh();
    refine();
})


// Ctrl For Dash
app.controller('DashInstantCtrl', function($scope, dash, $location, dashInstant, dashVans, dashPorters) {
    $scope.dashInstant = dashInstant;
    $scope.dashVans = dashVans;
    $scope.dashPorters = dashPorters;

    // Set up autocomplete
    $scope.pickup1 = null;
    $scope.dropoff1 = null;
    $scope.pickup2 = null;
    $scope.dropoff2 = null;
    $scope.pickup3 = null;
    $scope.dropoff3 = null;
    $scope.pickup4 = null;
    $scope.dropoff4 = null;
    $scope.autocompleteOptions = {
        componentRestrictions: { country: 'uk' },
        types: ['geocode']
    
    }
    $scope.chooseVans = function(vanType, $event) {
        $scope.dashInstant.vanType = vanType;
        // Mark Chosen Van Box
        $('.van-choose').removeClass('bord-picked');
        $.each($('.van-choose'), function(i,v) {
            if($(v).attr('data-van') == vanType) {
                $(v).addClass('bord-picked');
            }
        });
    }

    $scope.choosePorters = function(porterQty, $event) {
        $scope.dashInstant.porterQty = porterQty;
        // Mark Chosen Van Box
        $('.porter-qty').removeClass('bord-picked');
        $.each($('.porter-qty'), function(i,v) {
            if($(v).attr('data-porter') == porterQty) {
                $(v).addClass('bord-picked');
            }
        });
        console.log($scope.dashInstant.porterQty);
    }
})

app.controller('DashScheduleCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashRecurringCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashProjectCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashAddressBookCtrl', function($scope, $http, $rootScope) {
    $scope.test = {
        Name: "asshole",
        Job: "pooing",
        Relationship: "body part"
    }
    $scope.test2 = "hello world";
    
    var idGrab = function() {
        return $rootScope.currentUser._id;
    }
    var refresh = function() {
        $http.post('/api/contactlist', {data:idGrab()}).success(function(response) {
            $scope.conlist = response.data;
            console.log($scope.conlist);
        });
    };
     
     refresh();
     
     
     $scope.addContact =function() {
        console.log($scope.contact);
        $http.post('/api/add-contact', {contact:$scope.contact, user:$rootScope.currentUser._id}).success(function(response){
            console.log(response);
            refresh();
        }); 
     
     };
//    $scope.remove = function(id) {
//        console.log(id);
//    $http.delete('/api/contactlist/' + id).success(function(response){
//        refresh();
//    });
//    };
     
//     $scope.edit = function(id) {
//        console.log(id);
//    $http.get('/api/contactlist/' + id).success(function(response){
//        $scope.contact = response;
//    });
//    };
     
})

app.controller('DashAddAddressCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashJobCompleteCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashMessagesCtrl', function($scope, dash, $location, dashInstant, zDesk) {
    zDesk.getTickets();
})

// Ctrl For mydrivers
app.controller('DashDriversCtrl', function($scope, $http, $rootScope) {
  
})

app.controller('DashDriverprofileCtrl', function($scope, $http, $rootScope) {
  
})

app.controller('DashLiveviewCtrl', function($scope, $http, $rootScope) {
  
})

app.controller('DashNotificationsCtrl', function($scope, $http, $rootScope) {
  
})

app.controller('DashTicketCtrl', function($scope, dash, $location, dashInstant) {
    //
})


// Ctrl For Navigation
app.controller('NaviCtrl', function($scope, dash, $route, $http, $location) {
    $scope.dash = dash;
    // Grab appRoute.js Action Param
    dash.currentView = $route.current.action;
    
    $scope.logout = function(){
        $http.post("/api/logout")
        .success(function(){
            $location.url("/login");
        
        });
    };
    
    $scope.openTicketbar = function(){
        console.log("im in");
        var ele = $(".am-right-sidebar:hidden");
        if (ele.hasClass("open-right-sidebar")){
            ele.removeClass("open-right-sidebar");
        }else{
            ele.addClass("open-right-sidebar");
        }
    };
    

})

app.controller('NaviAdminCtrl', function($scope, admin, $route, $http, $location) {
    $scope.admin = admin;
    // Grab appRoute.js Action Param
    admin.currentView = $route.current.action;
    
//    $scope.logout = function(){
//        $http.post("/api/logout")
//        .success(function(){
//            $location.url("/login");
//        
//        });
//    };
//    
//    $scope.openTicketbar = function(){
//        console.log("im in");
//        var ele = $(".am-right-sidebar:hidden");
//        if (ele.hasClass("open-right-sidebar")){
//            ele.removeClass("open-right-sidebar");
//        }else{
//            ele.addClass("open-right-sidebar");
//        }
//    };
    

})

