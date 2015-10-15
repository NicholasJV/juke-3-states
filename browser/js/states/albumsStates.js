//albumStates.js

app.config(function($stateProvider){
	$stateProvider.state('AlbumsList', {
		url: '/albums',
		templateUrl: '/js/templates/albums.html',
        controller: 'AlbumsCtrl'
	})
})

