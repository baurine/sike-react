window.onload = function() {
    console.log("page loaded");
    makeCartScrollNicely();
    toggleRightSidebar();
}

function makeCartScrollNicely() {
    var cart = document.querySelector(".cart");
    Ps.initialize(cart);
}

function toggleRightSidebar() {
	var $toggle = document.querySelector(".site__right-sidebar-toggle");
	$toggle.addEventListener("click",function() {
  		document.body.classList.toggle("js-show-right-sidebar");
	});
}