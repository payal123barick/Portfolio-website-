
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetClass = this.getAttribute('href').substring(1); // e.g. "about"
    const targetElement = document.querySelector('.'+targetClass);
        if(targetElement){
    targetElement.scrollIntoView({ behavior: 'smooth' });
        }
  });
});
