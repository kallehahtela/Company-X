function showMenu() {
  document.querySelector(".navigation").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("hide");
  document.querySelector(".close").classList.toggle("show");
}

/*function initMap() {
  var location = { lat: 61.505423, lng: 23.713918 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}*/

let map;
        let geocoder;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 0, lng: 0 },
                zoom: 8
            });
            geocoder = new google.maps.Geocoder();
        }

        function addMarker() {
            const address = document.getElementById('addressInput').value;

            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == 'OK') {
                    const location = results[0].geometry.location;
                    const marker = new google.maps.Marker({
                        map: map,
                        position: location
                    });
                    map.setCenter(location);
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
