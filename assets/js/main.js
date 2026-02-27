/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split(".home__profession-1", {
  chars: true,
});

const { chars: chars2 } = text.split(".home__profession-2", {
  chars: true,
});

animate(chars1, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetSelector = tab.dataset.target,
      targetContent = document.querySelector(targetSelector);

    // Disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove("work-active"));
    tabs.forEach((t) => t.classList.remove("work-active"));

    // Active the tab and corresponding content
    tab.classList.add("work-active");
    targetContent.classList.add("work-active");
  });
});

/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById("contact-btn");
const copyEmail = document.getElementById("contact-email").textContent;

copyBtn.addEventListener("click", () => {
  // Use the clipboard API to copy text
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'E-mail copiado <i class="ri-chat-check-fill"></i>';

    // Restore the original text
    setTimeout(() => {
      copyBtn.innerHTML = 'Copiar e-mail <i class="ri-file-copy-2-fill"></i>';
    }, 2000);
  });
});

/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const textYear = document.getElementById("footer__year"),
  currentYear = new Date().getFullYear();

// Eacg year it Is updated to the current year
textYear.textContent = currentYear;

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__menu a");

const scrollActive = () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  // Remove active de todos
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
  });

  // Ativa apenas o correto
  if (currentSection) {
    const activeLink = document.querySelector(
      `.nav__menu a[href="#${currentSection}"]`,
    );
    activeLink?.classList.add("active-link");
  }
};

window.addEventListener("scroll", scrollActive);

/*=============== CUSTOM CURSOR ===============*/

/* Hide custom cursor on links */

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  // reset: true, //Animations Repeat
});

sr.reveal(".home__image, .work__container, .contact__container");
sr.reveal(".home__data", { delay: 900, origin: "bottom" });
sr.reveal(".home__info", { delay: 1200, origin: "bottom" });
sr.reveal(".home__social, .home__cv", { delay: 1500 });
sr.reveal(".about__data", { origin: "left" });
sr.reveal(".about__image", { origin: "right" });
