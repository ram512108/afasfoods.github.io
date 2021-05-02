var slideIndex = 0;
carousel();

function carousel(){
  var i = 0;
  var x = document.getElementsByClassName("sliding");

  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > x.length){
    slideIndex = 1
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const afas = { lat: 11.339535711149866, lng: 79.08079043038501 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: afas,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: afas,
    map: map,
  });
}