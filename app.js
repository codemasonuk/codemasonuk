document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll(".motion-hide");
	let delay = 0;

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add("motion-show");
						observer.unobserve(entry.target);
					}, delay);
					delay += 150; // Increase delay for next element
				}
			});
		},
		{ threshold: 0.1 }
	);

	elements.forEach((el) => {
		observer.observe(el);
	});
});
