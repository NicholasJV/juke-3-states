app.controller('AlbumsCtrl', function ($scope, $rootScope, AlbumFactory) {
	AlbumFactory.fetchAll()
	.then(function (albums) {
		$scope.albums = albums;
	});

});
