ymaps.ready(function(){var a=new ymaps.Map("interactive-map",{center:[59.93940627,30.32951326],zoom:16},{searchControlProvider:"yandex#search"}),b=new ymaps.Placemark([59.93869332,30.32309417],{},{iconLayout:"default#image",iconImageHref:"img/pin.svg",iconImageSize:[80,140],iconImageOffset:[-37,-138]});a.geoObjects.add(b),a.controls.remove("typeSelector"),a.controls.remove("trafficControl"),a.controls.remove("searchControl"),a.controls.remove("zoomControl")});var button=document.querySelector(".contacts-wrapper .button"),popup=document.querySelector(".modal-feedback"),overlay=document.querySelector(".overlay"),body=document.querySelector("body"),close=popup.querySelector(".modal-close"),form=popup.querySelector(".feedback-form"),userName=form.querySelector("[name=feedback-name]"),userEmail=form.querySelector("[name=feedback-email]"),userFeedback=form.querySelector("[name=feedback-text]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("userName")}catch(err){isStorageSupport=!1}button.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-show"),overlay.classList.add("overlay-show"),body.classList.add("motionless"),storage?(userName.value=localStorage.getItem("userName"),userEmail.value=localStorage.getItem("userEmail"),userFeedback.focus()):userName.focus()}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("overlay-show"),body.classList.remove("motionless")}),form.addEventListener("submit",function(a){userName.value&&userEmail.value&&userFeedback.value?isStorageSupport&&(localStorage.setItem("userName",userName.value),localStorage.setItem("userEmail",userEmail.value)):(a.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&(a.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("overlay-show"),body.classList.remove("motionless")))});