'use strict';

/**
 * @ngdoc function
 * @name belongouiApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the belongouiApp
 */

var app = angular.module('upload',['angularFileUpload'])
  .controller('UploadCtrl', ['$scope', 'FileUploader', 'UserObject', function($scope, FileUploader, UserObject) {
    var name = 'name.jpg';
    var lat = 0;
    var lon = 0;
    var url = 'http://localhost:8000/image/upload?name=' + name + '&lat=' + lat + "&lon=" + lon;

    var uploader = $scope.uploader = new FileUploader({
      url: url,
      alias:'file',
      headers: {'Authorization': ' Bearer ' + UserObject.token}
    });

    // FILTERS


    uploader.filters.push({
      name: 'customFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
        console.info("Filter: ", item, options)
        return this.queue.length < 10;
      }
    });


    // CALLBACKS

    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
      console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
      console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
      console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
      console.info('onCompleteAll');
    };

    console.info('uploader', uploader);
  }]);
