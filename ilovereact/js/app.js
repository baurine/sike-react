function animatLogo() {
	TweenMax.fromTo("#react-logo", 3, {
		css: {
			top: "-50px",
		}
	}, {
		css: {
			top: "20px",
		},

		repeat: -1,

		yoyo: true,

		ease: Power2.easeInOut,
	});
}

/*
window.onload = function() {
	animatLogo();
};
*/

window.onload = animatLogo;