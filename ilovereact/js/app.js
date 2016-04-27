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

function updateSliderControl() {
    var links = document.querySelectorAll("#slider-control a");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        var section = document.querySelector(link.getAttribute("href"));
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + window.innerHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            link.className = "active";
        } else {
            link.className = "";
        }
    }
}

function scrollToElement(element) {
    var topOfElement = element.offsetTop;

    TweenMax.to(window, 1, {
        scrollTo: {
            y: topOfElement,
        },

        ease: Power2.easeInOut,
    });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        /*
         * error! the herf will be always the last href
         * so when you click any dot, it will scroll the last section 
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            var href = link.getAttribute("href");
            scrollToElement(document.querySelector(href));
        });
        */

        (function(_link){
            _link.addEventListener("click", function(event) {
                event.preventDefault();

                var href = _link.getAttribute("href");
                scrollToElement(document.querySelector(href));
            });
        })(link);
    }
}

window.onscroll = function() {
    updateSliderControl();
}

window.onload = function() {
    animateLogo();
    animateRobot();
    updateSliderControl();
    addSmoothScrolling();
};

/*
window.onload = animatLogo;
*/
