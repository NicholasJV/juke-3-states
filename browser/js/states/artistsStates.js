//artistsState.js

app.config(function($stateProvider){
	$stateProvider.state('ArtistsList', {
		url: '/artists',
		templateUrl: '/js/templates/artists.html',
		resolve: { 
			artists: function(ArtistFactory){
				return ArtistFactory.fetchAll();
			} 
		},
        controller: 'ArtistsCtrl'
	})
})
