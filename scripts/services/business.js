'use strict';

/**
 * @ngdoc service
 * @name halanxApp.business
 * @description
 * # business
 * Factory in the halanxApp.
 */
angular.module('halanxApp')
  .factory('business', function ($http,$q) {
    var object =  {
        gettoken : function(){
          var token = localStorage.getItem("token");
          return token; 
        },
        callserver : function(obj,key){
          console.log(key);
            var pr = $q.defer();
				var url = "https://api.halanx.com/stores/114/edit/";
            console.log(obj);
				$http.post(url,obj, {
            headers: {
                'Authorization': 'Token ' +key 
            }
          }).then(function(data){
					pr.resolve(data);
                    console.log("Data Posted",data);
				}
					,function(err){
					pr.reject(err);	
					console.log(" Error");
					});
            return pr.promise;
				},
        getdata : function(key,sid){
          console.log(key);
            var pr = $q.defer();
				var url = "https://api.halanx.com/stores/" + "114" ;
				$http.get(url, {
            headers: {
                'Authorization': 'Token ' +key 
            }
          }).then(function(data){
					pr.resolve(data);
                    console.log("Data",data);
				}
					,function(err){
					pr.reject(err);	
					console.log(" Error");
					});
            return pr.promise;
				}
				}
    return object;
  });
