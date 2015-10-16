app.config(function($stateProvider){
	$stateProvider.state('ArtistList', {
		url: '/artist/:id',
		templateUrl: '/js/templates/artist.html',
        controller: 'ArtistCtrl'
	})
	.state('ArtistList.albums', {
		url: '/albums',
		templateUrl: '/js/templates/artist_albums.html'
	})
	.state('ArtistList.songs', {
		url: '/songs',
		templateUrl: '/js/templates/artist_songs.html'
	})
})