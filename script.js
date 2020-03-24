function openMenu() {
    var x = document.getElementById('phoneNav');
    
    if(x.style.display === 'none') {
        x.style.display = 'block';
        
    } else {
        x.style.display = 'none';
    }
}

var testimonialIndex = 0;
slideShow();

function slideShow() {
  var i;
  var slides = document.getElementsByClassName('testimonial-slide');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; 
  }
  testimonialIndex++;
  if (testimonialIndex > slides.length) {testimonialIndex = 1} 
  slides[testimonialIndex-1].style.display = 'block'; 
  setTimeout(slideShow, 2000); // Change image every 2 seconds
}