//registering 
gsap.registerPlugin(TextPlugin)

const headerAnimations = gsap.timeline()
    headerAnimations.from(".heroInfoBox", {opacity: 0, scale: 0, duration: .75})
    .from(".heroIcon", {x: 200, scale: 0, opacity: 0, duration: .5, stagger: .25}, "-=.5")
    .from(".desktopNav", {y: -100, duration: .75}, "-=1")
    .from("#mainHeroText", {duration: 2, text: ""}, "-=.75")

// TIMELINES
const introAnimations = gsap.timeline({
    scrollTrigger: ".homeIntroArea",
    start: "top top", // top of ".homeIntroArea hits top of viewport"
    end: "+=500", // end animation 500px after beginning
})
const pricingAnimations = gsap.timeline({
    scrollTrigger: ".homePricing",
    start: "top top",
    end: "+=900",
})
const blogAnimations = gsap.timeline({
    scrollTrigger: ".blogArea",
    start: "top top",
    end: "=+1100",
})
// END 

//VARAIBLES
const containerHeaderAnimation = {x: -200, opacity: 0, duration: 1}
const basicBlockAnimation = {y: 200, opacity: 0, duration: 1, stagger: .25}
// END

// ANIMATIONS
introAnimations.addLabel("intro")
    .from(".introHeader", containerHeaderAnimation)
    .addLabel("introBlocks")
    .from(".aboutBlock", basicBlockAnimation)

pricingAnimations.addLabel("pricing")
    .from(".pricingHeader", containerHeaderAnimation)
    .addLabel("pricingBlocks")
    .from(".priceBlock", basicBlockAnimation, "-=.5")

blogAnimations.addLabel("blogs")
    .from(".featuredBlogTitle", containerHeaderAnimation)
    .addLabel("featuredBlog")
    .from("#featuredBlogImg", {y: -300, opacity: 0,}, "-=.5")
    .addLabel("otherBlogs")
    .from(".blogHeader", containerHeaderAnimation)
    .from(".standardBlogCard", {x: -200, opacity: 0, stagger: .5, duration: 1})


// END