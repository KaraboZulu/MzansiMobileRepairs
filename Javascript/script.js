function updateDateTime(){
    const now = new Date();
    const options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    };
    const el = document.getElementById('datetime');
    if(el){
        el.textContent = now.toLocaleDateString('en-ZA', options);
    }
}
updateDateTime();
setInterval(updateDateTime, 1000);

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('serviceError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMsg').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
    }
    if (email === '' || !email.includes('@')) {
      document.getElementById('emailError').textContent = 'Valid email is required';
      isValid = false;
    }
    if (phone === '' || phone.length < 10) {
      document.getElementById('phoneError').textContent = 'Valid phone number is required (10 digits)';
      isValid = false;
    }
    if (service === '') {
      document.getElementById('serviceError').textContent = 'Please select a service';
      isValid = false;
    }
    if (message === '') {
      document.getElementById('messageError').textContent = 'Message is required';
      isValid = false;
    }

    if (isValid) {
      document.getElementById('successMsg').style.color = 'green';
      document.getElementById('successMsg').textContent = 'Thank you! Your message has been sent. We will contact you soon.';
      form.reset();
    }
  });
}