document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll(".motion-hide");
	let delay = 0;
	let firstLoad = true;

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add("motion-show");
						observer.unobserve(entry.target);
					}, delay);
					if (firstLoad) {
						delay += 150; // Increase delay for next element if it is the first load
					} else {
						delay = 0; // No delay for elements that appear on scrolling
					}
				}
			});
			firstLoad = false; // Set to false after the initial load
		},
		{ threshold: 0.1 }
	);

	elements.forEach((el) => {
		observer.observe(el);
	});
});
