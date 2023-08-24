window.onload = function() {
  if (!document.cookie.includes('cookieBannerShown=true')) {
    document.getElementById('cookie-banner').style.display = 'block';
  }

  document.getElementById('cookie-button').addEventListener('click', closeCookieBanner);
}

function closeCookieBanner() {
  document.cookie = 'cookieBannerShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  document.getElementById('cookie-banner').style.display = 'none';
}

window.addEventListener('DOMContentLoaded', function() {
  const calendlyLinkContainer = document.getElementById('calendly-link');
  initializeCalendly(calendlyLinkContainer);
});

document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial');
  const testimonialsContainer = document.querySelector('.testimonials');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      if (i === index) {
        testimonial.classList.add('active');
      }
    });
  }

  function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonialsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    showTestimonial(currentIndex);
  }

  function showPrevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    testimonialsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    showTestimonial(currentIndex);
  }

  prevButton.addEventListener('click', showPrevTestimonial);
  nextButton.addEventListener('click', showNextTestimonial);

  showTestimonial(currentIndex);
});




