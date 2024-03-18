function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
}

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("year").textContent = new Date().getFullYear();
});

const serviceBlock = document.querySelector('.service__blocks-block');
console.log(serviceBlock);
function addColorAnimation () {
	serviceBlock.classList.toggle('color-change-2x-background');
	console.log(serviceBlock);
};
serviceBlock.addEventListener('mouseover', addColorAnimation);
serviceBlock.addEventListener('mouseout', addColorAnimation);

const links = document.querySelector('.new-header__nav-links');
function addAnimationToLinks() {
	links.classList.toggle('color-change-2x-background');
	console.log(links);
}
links.addEventListener('mouseover', addAnimationToLinks);
links.addEventListener('mouseout', addAnimationToLinks);

const teamWindow = document.querySelector('.team__devs-window');
function windowEnter () {
	
}




function navToggle() {
	document.getElementById('header__navID').classList.toggle('is-active');
  }
  function navRemove() {
	document.getElementById('header__navID').classList.remove('is-active');
  }
  function navAdd() {
	document.getElementById('header__navID').classList.add('is-active');
  }
  
  
  const myBurger = document.getElementById('header__navID');
  console.log(myBurger)

  
  const menu = document.querySelector('.menu')
  document.addEventListener('click', (e) => {
	const click = e.composedPath().includes(myBurger);
	const menus = e.composedPath().includes(menu);
	console.log(!click, !menus, myBurger.classList == 'is-active');
	if (!click && !menus) {
	  navRemove();
	}
	}
  );