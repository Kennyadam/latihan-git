var slideIndex = 1;
var stop = startSlide();
var images;

function startSlide() {
  var i=0;
  images = document.getElementsByClassName("images");
  for (i; i < images.length; i++) {
    images[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > images.length) {
    slideIndex = 1;
  } 
  images[slideIndex-1].style.display = "block";
  stop = setTimeout(startSlide, 4000);
}

function stopSlide(){
  clearTimeout(stop);
}

function nextSlides(n) {
  startSlide(slideIndex += n);
  stopSlide();
}

function previousSlide(){
    images[slideIndex-1].style.display="none";
  if(slideIndex!=1){
    slideIndex = slideIndex - 1;
  }
  else slideIndex = slideIndex = images.length;
  images[slideIndex-1].style.display = "block";
}

function nextSlide(){
  images[slideIndex-1].style.display="none";
  if(slideIndex!=images.length){
    slideIndex = slideIndex + 1;
  }
  else slideIndex = 1;
  images[slideIndex-1].style.display = "block";
}