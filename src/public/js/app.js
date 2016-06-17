/**
 * Created by thinhvoxuan on 6/16/16.
 */

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: 'public/template/index.html',
      controller: IndexCtrl
    })
    .state('addPost', {
      url: "/addPost",
      templateUrl: 'public/template/addPost.html',
      controller: AddPostCtrl
    });

  $urlRouterProvider.otherwise("index");
});

function IndexCtrl($scope, $http) {
  /**
   * sample code
   */
  //$http.get('/api/posts').success(function(data, status, headers, config) {
  //  $scope.posts = data.posts;
  //});
}

function AddPostCtrl($scope, $http, $location) {
  /**
   * add new post
   */
  //$scope.form = {};
  //$scope.submitPost = function () {
  //  $http.post('/api/post', $scope.form).
  //  success(function(data) {
  //    $location.path('/');
  //  });
  //};
}
