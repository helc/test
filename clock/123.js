/**
 * Created by Administrator on 2016-07-26.
 */
angular.module('myApp', [])
    .controller('MyController',
        function($scope, $interpolate) {
            $scope.to = 'ari@fullstack.io';
            $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
            // Set up a watch
            $scope.$watch('to', function(body) {
                if (body) {
                    var template = $interpolate(body);
                    $scope.previewText =
                        template({to: $scope.to});
                }
            });
        });