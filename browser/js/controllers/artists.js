app.controller('ArtistsCtrl', function ($scope, $rootScope, ArtistFactory, artists) {

	$scope.artists = artists;

	$scope.viewArtist = function (artistId) {
		$rootScope.$broadcast('changeView', {
			name: 'oneArtist',
			id: artistId
		});
	};
});