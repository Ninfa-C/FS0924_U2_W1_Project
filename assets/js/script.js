document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const liStarted= document.querySelector('nav ul li:last-child')
    
    if (window.scrollY > 485) { // Change '50' to the scroll distance you want
        header.classList.add('scrolled');
        liStarted.classList.add('btnScrolled')
    } else {
        header.classList.remove('scrolled');
        liStarted.classList.remove('btnScrolled')
    }
});