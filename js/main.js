$(document).ready(function () {
  $navTag = $(".nav-container");
  $toggleCollapse = $(".toggle-collapse");

  $toggleCollapse.click(function () {
    $navTag.toggleClass("collapse");
  });

  $(".owl-carousel").owlCarousel({
    margin: 15,
    loop: true,
    // items: 1,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .nav-prev-owl'), $('.owl-navigation .nav-next-owl')],
    responsiveBaseElement: 'body',
    responsive: {
      0: {
        items: 1
      },
      750: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // Move Up Button

  $('.move-up span').click(function() {
    $('body, html').animate({
        scrollTop: 0
    }, 1000)
  })


  // Animate on scroll (AOS)
  AOS.init();

});
