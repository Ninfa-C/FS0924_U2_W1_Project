document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const liStarted= document.querySelector('nav ul li:last-child')
    const topBanner = document.querySelector('.topBanner')
    const topBannerRect = topBanner.getBoundingClientRect();

    if (topBannerRect.bottom <= 70) {
        header.classList.add('scrolled');
        liStarted.classList.add('btnScrolled')
    } else {
        header.classList.remove('scrolled');
        liStarted.classList.remove('btnScrolled')
    }
});



const getRandomLetter = function() {
    const gs = document.querySelectorAll('g[stroke-linecap="butt"]');
    let random = Math.floor(Math.random() * gs.length);
    let currentLetter = gs[random];
    return currentLetter;
};


const changeLetterOpacity = function() {
    let letter = getRandomLetter();
    let opacity = parseInt(letter.getAttribute("opacity"));

    if (opacity === 0) {
        letter.setAttribute("opacity", 1);
    } else {
        letter.setAttribute("opacity", 0);
    }
};


const fadeInOutLetters = function() {
    setInterval(function() {
        changeLetterOpacity(); 
    }, 40);
};


fadeInOutLetters();



