// let slideIndex = -1;
// showSlides()

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides"); // get the DOM element of the slideshows containers
//   let dots = document.getElementsByClassName("dot"); // get the DOM element of the slideshow dots
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   //////This piece of code activate and deactivate the dots on the slide show
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", ""); //this activates the new dot and deactivate the older one
//   }
//   //
//   slides[slideIndex-1].style.display = "block"; //this piece of code is the one who displays the images in the slideshows 
//   dots[slideIndex-1].className += " active";// iterates each dot
//   setTimeout(showSlides, 6000); // Change image every 5 seconds
// } 




