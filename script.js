// function myMenuFunction() {
//     var menuBth = document.getElementById("myNavMenu")

//     if (menuBth.className === "nav-menu") {
//         menuBth.className += "responsive";
//     } else {
//         menuBth.className = "nav-menu";
//     }
// }



// // -----Dark Mode---

// const body = document.querySelector("body"),
//     toggleSwitch = document.getElementById("toggle-switch");

// toggleSwitch.addEventListener("click", () => {
//     body.classList.toggle("dark");
// });

// // -------Typing Effect---------

// var typingEffect = new Typed(".typedtext", {
//     strings: ["Designer", "Coder", "Developer"],

//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 80,
//     backDelay: 2000,

// });

// // -------Scroll animation--------

// const sr = ScrollReveal({
//     origin: "top",
//     distance: "80px",
//     duration: 2000,
//     reset: true,
// });

// sr.reveal(".featured-name", { delay: 100 });
// sr.reveal(".text-info", { delay: 200 });
// sr.reveal(".text-btn", { delay: 200 });
// sr.reveal(".socical_icon", { delay: 200 });
// sr.reveal(".featured-image", { delay: 200 });


// sr.reveal(".projects-box", { interval: 200 });

// sr.reveal(".top-header", {});


// const srLeft = ScrollReveal({
//     origin: "left",
//     distance: "80px",
//     duration: 2000,
//     reset: true,
// });

// srLeft.reveal(".about-info", { delay: 100 });
// srLeft.reveal(".contact-info", { delay: 100 });

// const srRight = ScrollReveal({
//     origin: "left",
//     distance: "80px",
//     duration: 2000,
//     reset: true,
// });

// srRight.reveal(".skill", { delay: 100 });
// srRight.reveal(".skill-box", { delay: 100 });


// // --------active link------

// const sections = document.querySelectorAll(".secton[id]");

// function scrollActive() {
//     const scrollY = window.screenY;

//     sections.forEach((current) => {

//         const sectionHeight = current.offsetHeight,

//             sectionTop = current.offsetTop - 50,
//             sectionId = current.getAttribute("id");
//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document
//                 .querySelector(".nav-menu a[href*=" + sectionId
//                     + "]")
//                 .classList.remove("active-link");
//         }
//     });
// }


// window.addEventListener("scroll", scrollActive);


// -----Menu Toggle Function-----
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// -----Dark Mode-----
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// -------Typing Effect---------
var typingEffect = new Typed(".typedtext", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

// -------Scroll Animation--------
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical_icon", { delay: 200 });
sr.reveal(".featured-image", { delay: 200 });
sr.reveal(".projects-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

// --------Active Link Highlighting------
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);
