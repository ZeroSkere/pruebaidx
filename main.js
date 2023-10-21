const heroImage = document.querySelector('.hero img');

heroImage.addEventListener('mouseover', function() {
  this.classList.add('grayscale');
});

heroImage.addEventListener('mouseout', function() {
  this.classList.remove('grayscale');
});

const navLinks = document.querySelectorAll('.navbar-nav a');

for (const link of navLinks) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Get the href attribute of the link.
    const href = this.getAttribute('href');

    // Scroll to the element with the specified ID.
    window.scrollTo(0, document.querySelector(href).offsetTop);
  });
}
