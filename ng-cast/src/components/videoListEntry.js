angular.module('video-player')
// .controller('videoListEntryCtrl', function($scope) {
//   $scope.video = video;
// })
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick:'<'
    },
    controller: function ($scope) {
      //console.log('Video inside videoListEntry:', $scope);
    },
    controllerAs:'ctrl',
    bindToController:true,
    template: `
      <li class="video-list-entry media">
        <div class="media-left">
          <img class="media-object" ng-src={{ctrl.video.snippet.thumbnails.default.url}} />
        </div>
        <div class="media-body">
          <div class="video-list-entry-title" ng-click="ctrl.onClick(ctrl.video)">{{ctrl.video.snippet.title}}</div>
          <div class="video-list-entry-detail">{{ctrl.video.snippet.description}}</div>
        </div>
      </li>
    `
  };
});
