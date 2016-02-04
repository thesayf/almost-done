
app.service("zDesk", function($http, functions){
    var zDesk = {};
    zDesk.username = functions.base64encode("hello@moverspro.co.uk");
   // zDesk.username = "aGVsbG9AbW92ZXJzcHJvLmNvLnVr";
   zDesk.token =  functions.base64encode("/token:61MQgueFeykF3AQPY6RzWTtjC3hfA9sOI48ZjIvn");
   // zDesk.token =  "NjFNUWd1ZUZleWtGM0FRUFk2UnpXVHRqQzNoZkE5c09JNDhaakl2bg==";
    zDesk.uri = "https://moversprohelp.zendesk.com/api/v2/tickets.json";
    zDesk.getTickets = function() {
        $http({
            method:"Get",
            url: zDesk.uri,
            withCredentials: true,
            headers: {
                "Authorization": zDesk.username + "/token:" + zDesk.token 
            } 
        }).then(function(res){
            console.log(res);
        })
    }
    return zDesk;
});
app.service("authInter", function($location){
    console.log("you are being authed");
    $.ajax({
        url: "/api/login-auth",
        method:"POST"
    }).done(function(user){
        console.log(user);
        if (user !== '0') {
       // $rootScope.currentUser = user;
           // "you are logged in"
        } else {
            $location.path('/login');
        }
    });
    //$http.get('/api/login').success(function(user){
//        console.log(user);
//       // $rootScope.errorMessage = null;
//        //user is authenticated
//        //if (user !== '0'){
//            console.log("1");
//          //  $rootScope.currentUser = user;
//        //    deferred.resolve();
//        }
//        //user is not authenticated
//        //else{
//            console.log("0");
           // $rootScope.errorMessage = "you need to log in.";
//           // deferred.reject();
//           // $location.url('/login');
        
//        }
    
//    });
});

//app.service("authInter2", function($location){
//    console.log("you are being authed");
//    $.ajax({
//        url: "/api/signin-auth",
//        method:"POST"
//    }).done(function(staff){
//        console.log(staff);
//        if (staff !== '0') {
//       // $rootScope.currentUser = user;
//           // "you are logged in"
//        } else {
//            $location.path('/staff-login');
//        }
//    });
//    //$http.get('/api/login').success(function(user){
////        console.log(user);
////       // $rootScope.errorMessage = null;
////        //user is authenticated
////        //if (user !== '0'){
////            console.log("1");
////          //  $rootScope.currentUser = user;
////        //    deferred.resolve();
////        }
////        //user is not authenticated
////        //else{
////            console.log("0");
//           // $rootScope.errorMessage = "you need to log in.";
////           // deferred.reject();
////           // $location.url('/login');
//        
////        }
//    
////    });
//});

app.factory("dash", function(){
    return {
        currentView: 'dash-home',
    };
});

app.factory("driver", function(){
    return {
        username: '',
        password: '',
        password2: '',
        email: '',
        firstname: '',
        lastname: '',
        mobile: '',
        day: '',
        month: '',
        year: '',
        address: '',
        city: '',
        postcode: '',
        vehicle: '',
        reg: '',
        porters: '',
        vehiclenumber: '',
        bank: '',
        acc: '',
        sc: '',
        };
});

app.factory("staff", function(){
    return {
        username: '',
        password: '',
        password2: '',
        email: '',
        firstname: '',
        lastname: '',
        };
});

app.factory("admin", function(){
    return {
        currentView: 'admin-home',
    };
});

app.factory("dashInstant", function(){
    return {
        jobName: '',
        vanType: undefined,
        porterQty: '0 Porters',
    };
});

app.factory("dashPorters", function(){
    return {
        "0 Porter" : {
            porterQty: "0 Porters",
            //price: ,
        },
        "1 Porter" : {
            porterQty: "1 Porter",
            //price: ,
        },
        "2 Porters" : {
            porterQty: "2 Porters",
            //price: ,
        }
    };
});

app.factory("dashVans", function(){
    return {
        "Car": {
            vanType: 'Car',
            weight: '50kg',
            length: '100cm',
            width: '100cm',
            height: '75cm',
            hourlyPrice: ''
        },
        "Car Derived Van": {
            vanType: 'Car Derived Van',
            weight: '660kg',
            length: '1523m',
            width: '1473',
            height: '1181',
            MPG: '68.2',
            hourPriceDriver: '25',
            hourPricePorter: '10'
        },
        "Sub 1 Tonne": {
            vanType: 'Sub 1 Tonne',
            weight: '731kg',
            length: '2040',
            width: '1500',
            height: '1358',
            MPG: '53.3',
            hourPriceDriver: '25',
            hourPricePorter: '10'
        },
        "Short Wheel Base": {
            vanType: 'Short Wheel Base',
            weight: '1114kg',
            length: '2555',
            width: '1775',
            height: '1406',
            MPG: '40.4',
            hourPriceDriver: '30',
            hourPricePorter: '12'
        },
        "Long Wheel Base": {
            vanType: 'Long Wheel Base',
            weight: '1337kg',
            length: '3494',
            width: '1784',
            height: '2025',
            MPG: '33.2',
            hourPriceDriver: '35',
            hourPricePorter: '12'
        },
        "Hi-Top Long Wheel Base": {
            vanType: 'Hi-Top Long Wheel Base',
            weight: '1087kg',
            length: '4300',
            width: '1780',
            height: '1940',
            MPG: '33.6',
            hourPriceDriver: '35',
            hourPricePorter: '12'
        },
        "Luton Tail Lift": {
            vanType: 'Luton Tail Lift',
            weight: '1031kg',
            length: '4144',
            width: '1960',
            height: '2184',
            MPG: '33.6',
            hourPriceDriver: '35',
            hourPricePorter: '12'
        }
    };
});

app.service ("functions", function(){
    var functions = {};
    functions.base64encode = function(string){
        return Base64.encode(string);
    }
    var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

return functions;
})
