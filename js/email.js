// email.js

// (function(){
//     emailjs.init("service_5tmuq2h");
// })();

function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form element
  const form = document.querySelector('.contact-form'); // Adjust the selector if needed

  emailjs.sendForm("service_5tmuq2h", "template_z1yjhow", form).then(
      function (response) {
          console.log("Email sent successfully!", response);
          // Optionally, display a success message or redirect the user
          alert("Email sent successfully!");
      },
      function (error) {
          console.error("Email sending failed:", error);
          // Optionally, display an error message to the user
          alert("Email sending failed, please try again. Error: " + error);
      }
  );
}