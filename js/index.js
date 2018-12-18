ymaps.ready(function () {
	var myMap = new ymaps.Map('interactive-map', {
		center: [59.93940627, 30.32951326],
		zoom: 16
	}, {
		searchControlProvider: 'yandex#search'
	}),
	myPlacemark = new ymaps.Placemark([59.93869332, 30.32309417], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/pin.svg',
		iconImageSize: [80, 140],
		iconImageOffset: [-37, -138]
	});

	myMap.geoObjects
	.add(myPlacemark);

	myMap.controls.remove('typeSelector');
	myMap.controls.remove('trafficControl');
	myMap.controls.remove('searchControl');
	myMap.controls.remove('zoomControl');
});

var button = document.querySelector(".contacts-wrapper .button");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var body = document.querySelector("body");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".feedback-form");
var userName = form.querySelector("[name=feedback-name]");
var userEmail = form.querySelector("[name=feedback-email]");
var userFeedback = form.querySelector("[name=feedback-text]")
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("userName");
} catch (err) {
	isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("overlay-show");
	body.classList.add("motionless");

	if (storage) {
		userName.value = localStorage.getItem("userName");
		userEmail.value = localStorage.getItem("userEmail");
		userFeedback.focus();
	} else {
		userName.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("overlay-show");
	body.classList.remove("motionless");
});

form.addEventListener("submit", function (evt) {
	if (!userName.value || !userEmail.value || !userFeedback.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
			localStorage.setItem("userEmail", userEmail.value);
		}
	}
});

// Поробовать сделать наоборот: сначала проверять открыт ли попап, после отслеживать нажатие Esc
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
			overlay.classList.remove("overlay-show");
			body.classList.remove("motionless");
		}
	}
});