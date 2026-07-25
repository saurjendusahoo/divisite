/* ==========================================
   LENIS SMOOTH SCROLL
========================================== */

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* ==========================================
   LOADER
========================================== */

const loader = document.getElementById("loader");
const progressBar = document.querySelector(".loader-progress");
const percentText = document.getElementById("loading-percent");

let loadValue = 0;

const loading = setInterval(() => {

  loadValue++;

  progressBar.style.width = loadValue + "%";
  percentText.textContent = loadValue + "%";

  if (loadValue >= 100) {

    clearInterval(loading);

    gsap.to(loader, {
      opacity: 0,
      duration: 1.2,
      delay: .5,
      pointerEvents: "none"
    });

  }

}, 25);

/* ==========================================
   TYPED JS
========================================== */

new Typed(".typing", {

  strings: [

    "Aspiring AI Engineer",
    "Python Developer",
    "Future Tech Innovator",
    "AI Enthusiast",
    "Problem Solver",
    "Computer Engineering Student"

  ],

  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true

});

/* ==========================================
   PARTICLES
========================================== */

particlesJS("particles-js", {

  particles: {

    number: {
      value: 80
    },

    color: {
      value: "#00f5ff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: 3
    },

    move: {
      enable: true,
      speed: 2
    },

    line_linked: {
      enable: true,
      color: "#00f5ff",
      opacity: 0.2
    }
  },

  interactivity: {

    detect_on: "canvas",

    events: {

      onhover: {
        enable: true,
        mode: "grab"
      }

    }

  }

});

/* ==========================================
   CURSOR GLOW
========================================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const scrollBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

  const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (window.scrollY / totalHeight) * 100;

  scrollBar.style.width = progress + "%";

});

/* ==========================================
   MOBILE MENU
========================================== */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* ==========================================
   CLOSE MENU ON CLICK
========================================== */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {

      link.classList.add("active");

    }

  });

});

/* ==========================================
   GSAP
========================================== */

gsap.registerPlugin(ScrollTrigger);

/* HERO */

gsap.from(".hero-badge", {

  y: 50,
  opacity: 0,
  duration: 1

});

gsap.from(".hero h1", {

  y: 80,
  opacity: 0,
  duration: 1,
  delay: .2

});

gsap.from(".hero h2", {

  y: 60,
  opacity: 0,
  duration: 1,
  delay: .4

});

gsap.from(".hero p", {

  y: 60,
  opacity: 0,
  duration: 1,
  delay: .6

});

/* ALL SECTIONS */

gsap.utils
.toArray(".section")
.forEach(section => {

  gsap.from(section, {

    opacity: 0,
    y: 80,

    duration: 1.1,

    scrollTrigger: {

      trigger: section,
      start: "top 80%"

    }

  });

});

/* CARDS */

gsap.utils
.toArray(
".skill-card,.project-card,.stat-card,.mini-card"
)
.forEach(card => {

  gsap.from(card, {

    opacity: 0,
    y: 60,

    duration: .8,

    scrollTrigger: {

      trigger: card,
      start: "top 85%"

    }

  });

});

/* ==========================================
   COUNTERS
========================================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
    +counter.getAttribute("data-target");

    const current =
    +counter.innerText;

    const increment =
    target / 100;

    if (current < target) {

      counter.innerText =
      Math.ceil(current + increment);

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  ScrollTrigger.create({

    trigger: counter,

    start: "top 90%",

    once: true,

    onEnter: updateCounter

  });

});

/* ==========================================
   THEME TOGGLE
========================================== */

const themeToggle =
document.querySelector(".theme-toggle");

let darkMode = true;

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  darkMode = !darkMode;

  themeToggle.innerHTML = darkMode
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';

});

/* ==========================================
   LIGHT MODE VARIABLES
========================================== */

const style = document.createElement("style");

style.innerHTML = `

.light-mode{

  --bg-primary:#f5f7ff;
  --bg-secondary:#ffffff;

  --white:#111827;
  --text-secondary:#4b5563;

  background:#f5f7ff;
}

`;

document.head.appendChild(style);

/* ==========================================
   TERMINAL TYPEWRITER
========================================== */

const terminalLines = [

"> Initializing Divyansh.exe",
"> Loading Python Skills...",
"> Loading AI Development...",
"> Loading Data Structures...",
"> Loading Future Technologies...",
"> STATUS: READY TO BUILD THE FUTURE"

];

const terminalBody =
document.querySelector(".terminal-body");

if (terminalBody) {

  terminalBody.innerHTML = "";

  let line = 0;

  function addLine() {

    if (line < terminalLines.length) {

      const p =
      document.createElement("p");

      p.textContent =
      terminalLines[line];

      if (
        terminalLines[line]
        .includes("STATUS")
      ) {

        p.classList.add("success");

      }

      terminalBody.appendChild(p);

      line++;

      setTimeout(addLine, 700);

    }

  }

  setTimeout(addLine, 1000);

}

/* ==========================================
   ROADMAP HOVER EFFECT
========================================== */

const nodes =
document.querySelectorAll(".road-node");

nodes.forEach(node => {

  node.addEventListener(
    "mouseenter",
    () => {

      gsap.to(node, {

        scale: 1.08,
        duration: .3

      });

    }
  );

  node.addEventListener(
    "mouseleave",
    () => {

      gsap.to(node, {

        scale: 1,
        duration: .3

      });

    }
  );

});

/* ==========================================
   PARALLAX HERO
========================================== */

document.addEventListener(
  "mousemove",
  (e) => {

    const hero =
    document.querySelector(".hero-content");

    const x =
    (window.innerWidth / 2 - e.pageX) / 50;

    const y =
    (window.innerHeight / 2 - e.pageY) / 50;

    gsap.to(hero, {

      x: -x,
      y: -y,

      duration: 1

    });

  }
);

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 100) {

    navbar.style.background =
      "rgba(5,8,22,0.85)";

    navbar.style.backdropFilter =
      "blur(25px)";

  }

  else {

    navbar.style.background =
      "rgba(255,255,255,.05)";

  }

});

/* ==========================================
   READY
========================================== */

console.log(
"%cPortfolio Initialized Successfully 🚀",
"color:#00f5ff;font-size:16px;font-weight:bold;"
);