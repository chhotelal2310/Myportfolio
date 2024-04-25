/***********************************MENU SHOW Y HIDDEN******************** */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*************************************MENU SHOW***************************** */
/*Validate if constant exist************/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*******************************MENU HIDDEN************************************/
/*********************validate if constant exists******** */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        //console.log("hello");
    })
}


/******************************REMOVE MENU MOBILE******************************/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*****************************ACCORDITON SKILLS******************************** */
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass == 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})








/************************************QUALIFICATION TABLE************************* */

const tabs = document.querySelectorAll('.qualification__button');
const tabContents = document.querySelectorAll('.qualification__content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        tabs.forEach(tabItem => {
            tabItem.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');
        tab.classList.add('qualification__active');
    });
});







/************************************SERVICE MODEL************************************/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')
console.log(modalViews);


let modal = function (modalclick) {
    modalViews[modalclick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);

    })
})

modalCloses.forEach((modalclose) => {
    modalclose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })

})

/******************************Portfolio swiper************* */
let swiperportfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    // loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



/***********social section Active links****************/


const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)





/*********************change background header*****************/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/************show scrollup************/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/***********DARK LIGHT THEM ******************/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





var typed;
function text() {
    if (typed) {
        typed.destroy();
    }

    typed = new Typed('.typing-text', {
        strings: ['Frontend Developer', 'Backend Developer', 'Computer Science Student'],
        typeSpeed: 160,
        loop: true
    });
}

text();
setInterval(text, 16000);




function Send() {
    console.log("function call");
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("message").value;

    var pos = email.search("@gmail.com");
    if (name === "") {
        alert("Please enter the name");
        return;
    }
    if (email === "") {
        alert("Please enter the email");
        return;
    }
    if (message === "") {
        alert("Please enter the message");
        return;
    }
    if (pos <= 0) {
        alert("Please enter a valid Email");
        return;
    }
    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Message: " + message;
    console.log(body);
    
    Email.send({
        SecureToken: "66113086-6866-4634-9f0f-9cd4a670d91c",
        To: "chhotupatel705@gmail.com",
        From: "chhotupatel705@gmail.com",
        Subject: "My Porfolio",
        Body: body
    }).then(function (message) {
        if (message !== "" && email !== "" && name !== "") {
            swal("Successful", "Your data was successfully received by Chhotelal Patel", "success");

        } else {
            swal("Something went wrong", "Your data was not received", "error");
        }
    });
}


