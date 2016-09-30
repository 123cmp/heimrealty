angular.module('heimrealty')

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MapController', function($scope, $ionicLoading) {

  var styles = [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [
        { "hue": "#005eff" },
        { "saturation": 70 },
        { "gamma": 0.8 },
        { "lightness": 35 }
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

  var image = {
    url: 'img/map-marker.svg',
    size: new google.maps.Size(40, 50),
    origin: new google.maps.Point(0, 0)
  };

  google.maps.event.addDomListener(window, 'load', function() {
    var myLatlng = new google.maps.LatLng(38.8373376, -104.7596847);

    var mapOptions = {
      center: myLatlng,
      zoom: 15,
      panControl: false,
      scrollwheel: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image,
        title:""
      });

      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');

    $scope.map = map;
  });

});
