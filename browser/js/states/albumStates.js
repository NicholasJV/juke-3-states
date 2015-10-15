

app.config(function($stateProvider){
	$stateProvider.state('AlbumsList', {
		url: '/album/:id',
		templateUrl: '/js/templates/album.html',
        controller: 'AlbumCtrl'
	})
})

