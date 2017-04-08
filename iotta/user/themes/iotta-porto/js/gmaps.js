function initMap() {
  var uluru = {lat: 52.0432, lng: 4.3385};
  var map = new google.maps.Map(document.getElementById('googlemaps'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}