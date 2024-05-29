let slideIndex = 1;

if(document.readyState === "complete") {
  // Fully loaded!
  showSlides(slideIndex);
}
else if(document.readyState === "interactive") {
  // DOM ready! Images, frames, and other subresources are still downloading.
  
}
else {
  // Loading still in progress.
  // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.

  window.addEventListener("DOMContentLoaded", () => {
      // DOM ready! Images, frames, and other subresources are still downloading.
      
  });

  window.addEventListener("load", () => {
      // Fully loaded!
      
  });
}


// Controles para siguente/anterior
export function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles para seleccionar imagen desde miniatura
export function currentSlide(n) {
  showSlides(slideIndex = n);
}

export function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let thumb = document.getElementsByClassName("thumbnail");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumb.length; i++) {
    thumb[i].className = thumb[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumb[slideIndex-1].className += " active";
}


