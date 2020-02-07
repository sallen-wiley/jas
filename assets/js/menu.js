// open the menu

function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");	
	if(!myMenu.classList.contains("menu--visible")) {		
		myMenu.classList.add("menu--visible");
	} else {
		myMenu.classList.remove('menu--visible');		
	}	
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");
var oppMenu = document.querySelector(".menu-icon");
if(myMenu) {
    myMenu.addEventListener("transitionend", OnTransitionEnd, false);
    oppMenu.addEventListener("click", toggleClassMenu, false);
    myMenu.addEventListener("click", toggleClassMenu, false);
}

// toggle the panel in the menu

function togglePanel() {
    event.stopPropagation()
	if(!menuContent.classList.contains("show-panels")) {		
		menuContent.classList.add("show-panels");
	} else {
		menuContent.classList.remove('show-panels');		
	}	
}

var menuContent = document.querySelector(".menu-content");
if(menuContent) {
    menuContent.addEventListener("click", togglePanel, false);
}