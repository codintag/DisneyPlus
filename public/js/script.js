/* Js begin here */

let mobNav = document.getElementById('nav');
let navLogo = document.querySelector('.navLogo');
let sinscrire = document.querySelector('.inscrire');
let liwrapper = document.querySelector('.liwrapper');

//Event Listener for menu when scroll.
this.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mobNav.style.top = "0";
        mobNav.style.backgroundColor = '#040714' //'rgba(0, 0, 0, .8)';
        // mobNav.style.transition= 'all 1s'
        // navLogo.style.transition= 'all 1s'
        navLogo.style.display = 'initial';
        sinscrire.style.display = 'initial';
        liwrapper.style.display = 'initial';


    } else {
        mobNav.style.top = "0";
        mobNav.style.backgroundColor = '';
        navLogo.style.display = 'none';
        sinscrire.style.display = 'none';
        liwrapper.style.display = 'none';

    }
});

// when page bottom reached, button 'inscrivez-vous' dispear
this.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY > document.body.clientHeight) {
        liwrapper.style.display = 'none';
        sinscrire.style.display = 'none';
    }
});
