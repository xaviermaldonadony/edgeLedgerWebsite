function initMap() {
	const loc = { lat: 40.712776, lng: -74.005974 };

	const map = new google.maps.Map(document.querySelector('.map'), {
		zoom: 14,
		center: loc,
	});
	const marker = new google.maps.Marker({ positon: loc, map: map });
}
// Sticky menu background
window.addEventListener('scroll', () =>
	window.scrollY > 150
		? (document.querySelector('#navbar').style.opacity = 0.9)
		: (document.querySelector('#navbar').style.opacity = 1)
);
$('#navbar a, .btn').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;
		$('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800);
	}
});
