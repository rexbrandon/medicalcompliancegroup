const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    // scroll is at the very top
    if (currentScroll <= 0) {
        body.classList.remove("scrollUp")
    }
    // currentScroll > last scroll and body doesnt contain scrollDown remove scrollUp and add scrollDown
    if (currentScroll > lastScroll && !body.classList.contains("scrollDown")) {
        body.classList.remove("scrollUp")
        body.classList.add("scrollDown")
    }

    if (currentScroll < lastScroll && body.classList.contains("scrollDown")) {
        body.classList.remove("scrollDown")
        body.classList.add("scrollUp")
    }

    lastScroll = currentScroll

})