/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage =document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    //  serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_alc6sxe','template_9s9p17i','#contact-form','mlYk5lRnOss34Che4')
    .then(() => {
        // show send message 
        contactMessage.textContent = 'Your message sent successfully ✅'

        // remove message after 5s 
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000);

        // clear input fields
        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true //animation repeat
})



// slideshow

/* Find all slideshow containers */
var slideshowContainers = document.getElementsByClassName("slideshow-container");
/* For each container get starting variables */
for(let s = 0; s < slideshowContainers.length; s++) {
    /* Read the new data attribute */        
    var cycle = slideshowContainers[s].dataset.cycle;
    /* Find all the child nodes with class mySlides */
    var slides = slideshowContainers[s].querySelectorAll('.mySlides');
    var slideIndex = 0;
    /* Now we can cycle slides, but this recursive function must have parameters */
    /* slides and cycle never change, those are unique for each slide container */
    /* slideIndex will increase during each iteration */
    showSlides(slides, slideIndex, cycle);
};

/* Function is alsmost same, but now it uses 3 new parameters */
function showSlides(slides, slideIndex, cycle) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = "block";
    /* Calling same function, but with new parameters and cycle time */
    setTimeout(function() {
        showSlides(slides, slideIndex, cycle)
    }, cycle);
};

sr.reveal(`.home__data, .skills, .contact__container`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay :800})
sr.reveal(`.services__card`, {delay :100})
sr.reveal(`.about__content, .card2`, {origin: 'right'})
sr.reveal(`.about__img, .card1`, {origin: 'left'})
sr.reveal(`.exp__data`, {interval: 100})
sr.reveal(`.nav__link`, {interval: 200})

