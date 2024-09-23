// navbar scrolling effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});


// Function for changing background
function toggleBackground() {
  const body = document.body;
  const allH1s = document.querySelectorAll('h1');
  const allA = document.querySelectorAll('a');

  // Toggle the background color and text color
  if (body.style.backgroundColor === 'black') {
      body.style.backgroundColor = '#fff';
      body.style.color = '#000';
      allH1s.forEach(h1 => {
          h1.style.color = '#011f4b';
      });
      allA.forEach(a => {
        a.style.color = '#011f4b';
    });
  } else {
      body.style.backgroundColor = 'black';
      body.style.color = '#fff';
      allH1s.forEach(h1 => {
          h1.style.color = '#6497b1';
      });
      allA.forEach(a => {
        a.style.color = '#fff';
    });
  }
}

function burgerToggle() {
  console.log('test');
  
  // Get the burger icon and the menu by ID
  const burgerIcon = document.getElementById('mobile-burger');
  const menu = document.getElementById('mobile-menu');
  
  // Toggle the "active" class for both the icon and the menu
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('active');
}



(function(){
  emailjs.init("NQ-eHWsuDrCQy23tv"); // Replace with your actual EmailJS User ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send("service_9my9iol", "template_rb0j3ch", {
      from_name: name,
      reply_to: email,
      message: message
  })
  .then(function(response) {
      alert('Email successfully sent!');
  }, function(error) {
      alert('Failed to send email. Please try again later.');
  });
});