'use strict';

/* Controllers */

angular.module('vocabist.controllers', []);


function HomeController($scope){
    
};

function LearnController($scope, $routeParams, Word) {    
         
    $scope.lookupWord = function(searchWord) {
        $scope.word = Word.query({word: searchWord});
    };
};

function PracticeController($scope, $routeParams) {    
    
};
 