const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

  const form = document.querySelector('#contact-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('/send-email.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Your message has been sent!');
        form.reset();
      } else {
        throw new Error('An error occurred while sending your message.');
      }
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while sending your message. Please try again later.');
    });
  });