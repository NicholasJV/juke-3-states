

app.config(function($stateProvider){
	$stateProvider.state('AlbumList', {
		url: '/album/:id',
		templateUrl: '/js/templates/album.html',
        controller: 'AlbumCtrl'
	})
})

