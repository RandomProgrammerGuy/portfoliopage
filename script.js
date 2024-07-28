// FADE-ON-SCROLL ANIMATION
const faders = document.querySelectorAll('.fadein');

const options = {
    threshold: 0,
    rootMargin: '0px 0px -200px 0px'
};

const fadeOnScroll = new IntersectionObserver(function(entries, fadeOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.toggle('noopacity');
            fadeOnScroll.unobserve(entry.target);
        }
    })
}, options);

faders.forEach(fader => {
    fadeOnScroll.observe(fader);
})

// DROPDOWN MENU INTERACTION
const togglebutton = document.querySelector('.togglebutton');
const togglebuttonicon = document.querySelector('.togglebutton span');
const dropdown = document.querySelector('.dropdown');

togglebutton.onclick = function () {
    dropdown.classList.toggle('open');

    const isopen = dropdown.classList.contains('open');
    if (isopen)
        togglebuttonicon.innerHTML = 'close';
    else
        togglebuttonicon.innerHTML = 'menu';
}

// ACCORDION CARD INTERACTION (PASSIONS SECTION)
const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest('.accordionpanel');
    if (!activePanel) return;
    toggleAccordion(activePanel);
})

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll('.accordiontrigger');
    const contents = panelToActivate.parentElement.querySelectorAll('.accordioncontent');
    
    buttons.forEach((button) => {
        button.setAttribute('aria-expanded', false);
    })

    contents.forEach((content) => {
        content.setAttribute('aria-hidden', true);
    })

    panelToActivate.querySelector('.accordiontrigger').setAttribute('aria-expanded', true);

    panelToActivate.querySelector('.accordioncontent').setAttribute('aria-hidden', false);
}