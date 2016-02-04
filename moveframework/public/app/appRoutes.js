app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'app/components/home/home-view.html',
            controller  : 'HomeCtrl'
        })

        .when('/dash', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashHomeCtrl',
            action: "dash-home"
        })

        .when('/instant', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashInstantCtrl',
            action: "dash-instant"
        })

        .when('/schedule', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashScheduleCtrl',
            action: "dash-schedule"
        })

        .when('/recurring', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashRecurringCtrl',
            action: "dash-recurring"
        })

        .when('/project', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashProjectCtrl',
            action: "dash-project"
        })

        .when('/address-book', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddressBookCtrl',
            action: "dash-addressbook"
        })

        .when('/add-address', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-addaddress"
        })

        .when('/job-complete', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-jobcomplete"
        })

        .when('/payment-details', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-paymentdetails"
        })

        .when('/profile', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-profile"
        })

        .when('/project-job', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-projectjob"
        })

        .when('/saved-quotes', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-savedquotes"
        })

        .when('/pending-jobs', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-pendingjobs"
        })

        .when('/all-messages', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-allmessages"
        })

        .when('/signup', {
            templateUrl : 'app/components/home/signup.html',
            controller  : 'DashSignupCtrl'
            //action: "dash-allmessages"
        })

        .when('/login', {
            templateUrl : 'app/components/home/login.html',
            controller  : 'DashLoginCtrl'
            //action: "dash-allmessages"
        })
    
        
        .when('/viewallmessages', {
            templateUrl : 'app/components/home/dash-allmessages.html',
            controller  : 'DashMessagesCtrl',
            action: "dash-allmessages"
            //action: "dash-allmessages"
        })
        
        .when('/ticket-chain', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashTicketCtrl',
            action: "dash-ticketchain"
            //action: "dash-allmessages"
        })
    
        .when('/my-drivers', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashDriversCtrl',
            action: "dash-mydrivers"
            //action: "dash-allmessages"
        })

        .when('/driver-profile', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashDriverprofileCtrl',
            action: "dash-driverprofile"
            //action: "dash-allmessages"
        })
    
        .when('/live-view', {
                templateUrl : 'app/components/dash/dash-view.html',
                controller  : 'DashLiveviewCtrl',
                action: "dash-liveview"
                //action: "dash-allmessages"
            })
        
        .when('/notifications', {
                templateUrl : 'app/components/dash/dash-view.html',
                controller  : 'DashNotificationsCtrl',
                action: "dash-notifications"
                //action: "dash-allmessages"
            })
    
    .when('/admin', {
                templateUrl : 'app/components/admin/admin-view.html',
                controller  : 'AdminHomeCtrl',
                action: "admin-home"
            })
    
        .when('/users', {
            templateUrl : 'app/components/admin/admin-view.html',
            controller  : 'DashusersCtrl',
            action: "admin-users"
        })
        
        .when('/drivers', {
            templateUrl : 'app/components/admin/admin-view.html',
            controller  : 'DashdriversCtrl',
            action: "admin-drivers"
        })
    
     .when('/earnings', {
            templateUrl : 'app/components/admin/admin-view.html',
            controller  : 'DashdriversearningsCtrl',
            action: "admin-earnings"
        })
    
      .when('/staff-login', {
            templateUrl : 'app/components/home/staff-login.html',
            controller  : 'StaffSigninCtrl  '
            //action: "dash-allmessages"
        })
    
        .when('/contractor-signup', {
            templateUrl : 'app/components/home/contractor-signup.html',
            controller  : 'ContractorSignupCtrl'
            //action: "dash-allmessages"
        })
    
     .when('/staff', {
            templateUrl : 'app/components/admin/admin-view.html',
            controller  : 'DashstaffCtrl',
            action: "admin-staff"
        })  
    
    .otherwise({
                redirectTo: '/'
            });

        $httpProvider.interceptors.push("authInter");
        $locationProvider.html5Mode(true);

});


//var checklogin = function($q, $timeout, $http, $location, $scope, $rootScope){
//    var deferred = $q.defer();
//    
//    
//    
//    return deferred.promise;
//
//};


