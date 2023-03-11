const nav = document.querySelector(".navbar");
const hamburger = document.querySelector(".menuhamburger");

hamburger.addEventListener("click",() => {
    const visible = nav.getAttribute("data-visible");

    if (visible === "false") {
        nav.setAttribute("data-visible", true);
        nav.setAttribute("aria-expanded", true);

    }   else if (visible === "true") {
        nav.setAttribute("data-visible", false);
        nav.setAttribute("aria-expanded", false);
    }
});

