function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
}

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("year").textContent = new Date().getFullYear();
});

const serviceBlock = document.querySelector('.service__blocks-block');
console.log(serviceBlock);
function addColorAnimation () {
	serviceBlock.classList.toggle('color-change-2x-background')
};
serviceBlock.addEventListener('mouseover', addColorAnimation)
