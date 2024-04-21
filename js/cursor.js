  // Cursor Animation
  function cursorAnimation() {
    document.addEventListener("mousemove", function (details) {
      gsap.to("#cursor", {
        left: details.x,
        top: details.y,
      });
    });
  
    document.querySelector("#home").addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    });
  
    document.querySelectorAll(".home").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
        });
      });
  
      element.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
        });
      });
    });
  
    document.querySelector("#about").addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    });
  
    document.querySelectorAll("#about").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
        });
      });
  
      element.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
        });
      });
    });
  
    document.querySelector("#skills").addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    });
  
    document.querySelectorAll("#skills").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
        });
      });
  
      element.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
        });
      });
    });

    document.querySelector("#projects").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: 'translate(-50%, -50%) scale(0)',
        });
      });
    
      document.querySelectorAll("#projects").forEach(function (element) {
        element.addEventListener("mouseenter", function () {
          gsap.to("#cursor", {
            transform: "translate(-50%, -50%) scale(1)",
          });
        });
    
        element.addEventListener("mouseleave", function () {
          gsap.to("#cursor", {
            transform: "translate(-50%, -50%) scale(0)",
          });
        });
      });

      document.querySelector("#contact").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: 'translate(-50%, -50%) scale(0)',
        });
      });
    
      document.querySelectorAll("#contact").forEach(function (element) {
        element.addEventListener("mouseenter", function () {
          gsap.to("#cursor", {
            transform: "translate(-50%, -50%) scale(1)",
          });
        });
    
        element.addEventListener("mouseleave", function () {
          gsap.to("#cursor", {
            transform: "translate(-50%, -50%) scale(0)",
          });
        });
      });
  
    document.querySelector("#fullScreenNav").addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    });
  
    document.querySelectorAll("#fullScreenNav").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
        });
      });
  
      element.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
        });
      });
    });
  }
  
  cursorAnimation();