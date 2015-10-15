app.controller('AlbumsCtrl', function ($scope, $rootScope, $stateParams, AlbumFactory) {
	AlbumFactory.fetchAll()
	.then(function (albums) {
		$scope.albums = albums;
	});

		$scope.name = $stateParams.name;
	// $scope.viewAlbum = function (albumId) {
	// 	$rootScope.$broadcast('changeView', {
	// 		name: 'oneAlbum',
	// 		id: albumId
	// 	});
	// };

});
