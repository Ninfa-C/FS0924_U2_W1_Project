document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const liStarted= document.querySelector('nav ul li:last-child')
    const topBanner = document.querySelector('.topBanner')
    const topBannerRect = topBanner.getBoundingClientRect();

    if (topBannerRect.bottom <= 70) { // Change '50' to the scroll distance you want
        header.classList.add('scrolled');
        liStarted.classList.add('btnScrolled')
    } else {
        header.classList.remove('scrolled');
        liStarted.classList.remove('btnScrolled')
    }
});