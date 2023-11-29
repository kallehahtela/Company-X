function showMenu() {
  document.querySelector(".navigation").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("hide");
  document.querySelector(".close").classList.toggle("show");
}

function initMap() {
    var location = {lat: 61.505423, lng: 23.713918};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}