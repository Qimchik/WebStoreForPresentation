"use strict";
var mobile=(function(){
	return {
		resize:function (){
			if (document.body.clientWidth<=463){
				document.getElementsByTagName('h1')[0].innerHTML='TL';
				mobile.showMobileMenu(false);
			}
			else {
				document.getElementsByTagName('h1')[0].innerHTML='Template';
				mobile.showMobileMenu(true);
			}
		},
		showMobileMenu:function (display){
			if (display){
				document.getElementsByTagName('nav')[0].style.display='block';
				document.getElementsByClassName('menuButton')[0].style.display='none';
				document.getElementsByClassName('menuButtonClose')[0].style.display='block';
			}
			else{
				document.getElementsByTagName('nav')[0].style.display='none';
				document.getElementsByClassName('menuButton')[0].style.display='block';
				document.getElementsByClassName('menuButtonClose')[0].style.display='none';
			}
		}
	}
})();

document.getElementsByTagName('nav')[0].addEventListener('click', mobile.showMobileMenu, false);

