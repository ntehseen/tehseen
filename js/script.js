$(document).ready(function () {
  // Sticky navbar script
  $(window).scroll(function () {
    $(".navbar").toggleClass("sticky", this.scrollY > 20);
    $(".scroll-up-btn").toggleClass("show", this.scrollY > 500);

    // Fade In & Fade Out Elements on Scroll script
    $(".fadein").each(function () {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      $(this).toggleClass("showme", bottom_of_window > bottom_of_element);
    });
  });

  // Scroll up Button script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // Typing animation script
  var typed = new Typed(".typing, .typing2", {
    strings: ["FullStack Developer", "Machine Learning Engineer", "Tensorflow Developer", "Data Scientist"],
    typeSpeed: 180,
    backSpeed: 80,
    loop: true,
  });

  // // Toggle menu/navbar script
  // $(".menu-btn").click(function () {
  //   $(".navbar .menu, .menu-btn i").toggleClass("active");
  // });

  // // Owl carousel script
  // $(".carousel").owlCarousel({
  //   margin: 20,
  //   loop: true,
  //   autoplayTimeOut: 2000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: { items: 1, nav: false },
  //     600: { items: 2, nav: false },
  //     1000: { items: 3, nav: false },
  //   },
  // });

  // Animation timeline using GSAP
  var grid = [5, 13];
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  function animateBoxes(from, axis, ease) {
    tl.to(".info > *", {
      duration: 1,
      scale: 0.1,
      y: 60,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
      stagger: { amount: 1.5, grid: grid, axis: axis, ease: ease, from: from },
    });
  }

  animateBoxes("random", "null", "none");

  // Logo animation on mouseenter
  $(".logo").mouseenter(function () {
    TweenMax.fromTo(this, 0.01, { x: -20 }, { x: 20, clearProps: "x", repeat: 40 });
    TweenMax.fromTo(this, 0.02, { y: -20 }, { y: 20, clearProps: "y", repeat: 20 });
  });
});