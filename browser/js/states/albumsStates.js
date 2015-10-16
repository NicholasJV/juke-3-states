//albumStates.js

app.config(function($stateProvider){
	$stateProvider.state('AlbumsList', {
		url: '/albums',
		templateUrl: '/js/templates/albums.html',
		resolve: { 
			albums: function(AlbumFactory){
				return AlbumFactory.fetchAll();
			} 
		},
        controller: 'AlbumsCtrl'
	})
})

