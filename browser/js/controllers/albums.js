app.controller('AlbumsCtrl', function ($scope, $rootScope, AlbumFactory, albums) {
	$scope.albums = albums;
});
