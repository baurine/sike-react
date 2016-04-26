function animateLogo() {
    TweenMax.fromTo("#react-logo", 3, {
        css: {
            // use "y" replace "top", can accelerate by GPU
            y: "-50px",
        }
    }, {
        css: {
            y: "20px",
        },

        repeat: -1,

        yoyo: true,

        ease: Power2.easeInOut,
    });
}

function animateRobot() {
    var t = new TimelineMax({repeat: -1});
    t.to("#android-robot", 0.4, {rotation: "-=10deg"})
        .to("#android-robot", 0.8, {rotation: "+=20deg"})
        .to("#android-robot", 0.4, {rotation: "-=10deg"});
}

window.onload = function() {
    animateLogo();
    animateRobot();
};

/*
window.onload = animatLogo;
*/
