/*==================== CHANGE BACKGROUND HEADER ====================*/
const scrollHeader = () => {
    const header = document.getElementById('header');

    window.scrollY >= 20 
    ? header.classList.add('scroll-header') 
    : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector(
            '.nav-menu a[href*=' + sectionId + ']'
        );

        if (sectionClass) {
            if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link');
            } else {
                sectionClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*==================== SCROLL ABOUT ANIMATION ====================*/
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-gradient').forEach((span) => {
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
        },
    });
});

/*==================== MIXITUP FILTER PORTFOLIO ====================*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix',
    },
    animation: {
        duration: 300,
    }
});

/* Active work */
const linKWork = document.querySelectorAll('.work-item');

function activeWork() {
    linKWork.forEach((a) => {
        a.classList.remove('active-work');
    });

    this.classList.add('active-work');
}

linKWork.forEach((a) => a.addEventListener('click', activeWork));

/*==================== EMAIL JS ====================*/
const contactForm = document.getElementById('contact-form'),
    contactname = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactmessage = document.getElementById('contact-message'),
    message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();

    if (
        contactname.value === '' || 
        contactEmail.value === '' || 
        contactmessage.value === ''
    ) {
        message.textContent = 'Escribe todos los campos de entrada';

        setTimeout(() => {
            message.textContent = '';
        }, 3000);

    } else {
        emailjs
        .sendForm(
            'service_vv7smjx', 
            'template_69aqjwu', 
            '#contact-form', 
            '--30aU8Koe3u_mCC8'
        )
        .then(
            () => {
                message.textContent = 'mensaje enviado';

                setTimeout(() => {
                    message.textContent = '';
                }, 3000);
            },
            (error) => {
                alert('opp¡ algo salio mal..', error );
            }
        );

        contactname.value = '';
        contactEmail.value = '';
        contactmessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);