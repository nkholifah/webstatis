// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// search
function search() {
  var input = document.getElementById("search");
  var filter = input.value.toLowerCase();
  var item = document.querySelectorAll(".box");
  var l = document.getElementsByTagName("h3");

  for (var i = 0; i < l.length; i++) {
    var h3 = item[i].getElementsByTagName("h3")[0];

    var value = h3.textContent || h3.innerText;

    if (value.toLowerCase().indexOf(filter) > -1) {
      item[i].style.display = "block";
    } else {
      item[i].style.display = "none";
    }
  }
}
