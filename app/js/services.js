'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('vocabist.services', ['ngResource']).value('version', '0.1');

// Get word defintion
angular.module('vocabist.services').factory('Word', function($resource){
  return $resource('http://localhost\::port/vocabist/rest/voc/:word', 
            {}, {query: {method:'GET', params:{word:'@word', port:8080}, isArray:false}});
});