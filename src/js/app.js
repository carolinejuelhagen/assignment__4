// CALLINGS
const sideBarLinks = document.querySelectorAll(".sidebar__link");
console.log(sideBarLinks);

const contentContainers = document.querySelectorAll(".content-container");

console.log(contentContainers);

// LOOP
sideBarLinks.forEach((sidebarLink, index) => {
	sidebarLink.addEventListener("click", (e) => {
		contentContainers.forEach((contentContainer) => {
			contentContainer.classList.remove("content-container--active");
		});
		sideBarLinks.forEach((link) => {
			link.classList.remove("sidebar__link--active");
		});
		e.target.classList.add("sidebar__link--active");
		contentContainers[index].classList.add("content-container--active");
	});
});

