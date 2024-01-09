// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the carousel element
    var carousel = document.getElementById('SlideShowRoupa');

    // Function to show the next slide
    function showNextSlide() {
        // Get the current active slide
        var activeSlide = carousel.querySelector('.carousel-item.active');

        // Get the next slide
        var nextSlide = activeSlide.nextElementSibling;

        // If there is no next slide, loop back to the first slide
        if (!nextSlide) {
            nextSlide = carousel.querySelector('.carousel-item:first-child');
        }

        // Remove the active class from the current slide
        activeSlide.classList.remove('active');

        // Add the active class to the next slide
        nextSlide.classList.add('active');

        // Update the carousel indicators if needed (optional)
        var indicators = carousel.querySelectorAll('.carousel-indicators button');
        indicators.forEach(function(indicator, index) {
            indicator.classList.remove('active');
            if (index === Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(nextSlide)) {
                indicator.classList.add('active');
            }
        });
    }

    // Set an interval to change slides every 3 seconds
    setInterval(showNextSlide, 4000); // Change slides every 4 seconds
});




// FAQ
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
const itemToggle = this.getAttribute('aria-expanded');

for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
}

if (itemToggle == 'false') {
this.setAttribute('aria-expanded', 'true');
}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// 
//material contact form animation
// $('.contact-form').find('.form-control').each(function() {
//    var targetItem = $(this).parent();
//  if ($(this).val()) {
//  $(targetItem).find('label').css({
//  'top': '10px',
//'fontSize': '14px'
//});
//}
//})
//$('.contact-form').find('.form-control').focus(function() {
//    $(this).parent('.input-block').addClass('focus');
//  $(this).parent().find('label').animate({
//  'top': '10px',
//'fontSize': '14px'
//}, 300);
//})
// $('.contact-form').find('.form-control').blur(function() {
// if ($(this).val().length == 0) {
// $(this).parent('.input-block').removeClass('focus');
//$(this).parent().find('label').animate({
//'top': '25px',
//'fontSize': '18px'
// }, 300);
//}
//})