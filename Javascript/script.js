document.addEventListener("DOMContentLoaded", function() {

  const dt = document.getElementById("datetime");
  function updateTime() {
    if (dt) {
      dt.textContent = new Date().toLocaleString();
    }
  }
  updateTime(); 
  setInterval(updateTime, 1000);
  
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault(); 

      let valid = true;

    
      document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
      document.getElementById("success").textContent = "";

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value.trim();

      if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
      }
      if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Valid email is required";
        valid = false;
      }
      if (phone === "" || phone.length < 10) {
        document.getElementById("phoneError").textContent = "Valid phone is required";
        valid = false;
      }
      if (service === "") {
        document.getElementById("serviceError").textContent = "Please select a service";
        valid = false;
      }
      if (message === "") {
        document.getElementById("messageError").textContent = "Message is required";
        valid = false;
      }

      if (valid) {
        document.getElementById("success").textContent = "✓ Message sent successfully! We'll contact you soon.";
        form.reset();
        // Optional: hide success after 5 seconds
        setTimeout(() => {
          document.getElementById("success").textContent = "";
        }, 5000);
      }
    });
  }
});