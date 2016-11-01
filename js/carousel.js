"use strict";
var slider=(function(){
	return{
	drag:false,
	page:1,
	getPage:function(indexPage,animate){
		let index;
		if (indexPage==0) setTimeout(function(){slider.getPage(4,false)},300);
		if (indexPage==5) setTimeout(function(){slider.getPage(1,false)},300);
		if (animate===true) {
			document.getElementsByClassName('chooseSlide')[0].classList.remove('chooseSlide');
			index=indexPage-1;
			if (indexPage==0) index=3;
			if (indexPage==5) index=0; 
			document.getElementsByClassName('carouselButton')[index].classList.add('chooseSlide');
			document.getElementsByClassName('slides')[0].style.transition='all  0.3s ease-out 0s';
		}else document.getElementsByClassName('slides')[0].style.transition='none';
		let sliderWidth=(document.body.clientWidth>=1300)?1300:document.body.clientWidth;
		document.getElementsByClassName('slides')[0].style.left=-sliderWidth*indexPage+'px';
		this.page=indexPage;
		clearInterval(slider.timer);
		slider.timer=setInterval(function (){slider.nextPage()},5000);
		return false;
	},
	nextPage:function(indexPage,animate){
		slider.getPage(slider.page+1,true);
	},
	clickOnSlide:function(e){
		if (!slider.drag) window.location.href=e.target.getAttribute('url');
	},
	resize:function(){
		let slides=document.getElementsByClassName('slides')[0];
		
		if (document.body.clientWidth<768){
			slides.style.transition='none';
			for (let slide=0;slide<slides.getElementsByTagName('li').length;slide++){
				slides.getElementsByTagName('li')[slide].style.width=document.body.clientWidth+'px';
				slides.getElementsByTagName('li')[slide].style.height=document.body.clientWidth/1.355+253.21+'px';
			}
			document.getElementsByClassName('carousel')[0].style.height=document.body.clientWidth/1.355+253.21+'px';
			slides.style.height=document.body.clientWidth/1.355+253.21+'px';
		}
		else
		if (document.body.clientWidth<1300){
			slides.style.transition='none';
			for (let slide=0;slide<slides.getElementsByTagName('li').length;slide++){
				slides.getElementsByTagName('li')[slide].style.width=document.body.clientWidth+'px';
				slides.getElementsByTagName('li')[slide].style.height=document.body.clientWidth/17.73+776.7+'px';
			}
			document.getElementsByClassName('carousel')[0].style.height=document.body.clientWidth/17.73+776.7+'px';
			slides.style.height=document.body.clientWidth/17.73+776.7+'px';
		}
		else {
			for (let slide=0;slide<slides.getElementsByTagName('li').length;slide++){
				slides.getElementsByTagName('li')[slide].style.width='1300px';
				slides.getElementsByTagName('li')[slide].style.height='850px';
			}
			document.getElementsByClassName('carousel')[0].style.height='850px';
			slides.style.height='850px';
		}
		slider.getPage(slider.page);
	}
}})();

document.getElementsByClassName('slides')[0].onmousedown = function(e) {
	clearInterval(slider.timer);
	document.getElementsByClassName('slides')[0].style.transition='none';
	let xBeg=e.pageX,xSlidesBeg=parseInt(document.getElementsByClassName('slides')[0].style.left);
	moveAt(e);

	function endOfDrag(e) {
		if ((e.pageX -xBeg)>-5 && (e.pageX -xBeg)<5) 
			slider.drag=false;
		if ((e.pageX -xBeg)<-30 && slider.page<5) 
			slider.nextPage();
		else if ((e.pageX -xBeg)>30 && slider.page>0) slider.getPage(slider.page-1, true);
		else slider.getPage(slider.page);
		document.onmousemove = null;
		document.onmouseup=null;
		
	}
	function moveAt(e) {
		document.getElementsByClassName('slides')[0].style.left =xSlidesBeg+Math.floor((e.pageX -xBeg)/2) + 'px';
	}
	document.onmousemove = function(e) {
		slider.drag=true;
		if (e.which==1) moveAt(e);
		else endOfDrag(e);
	}
	document.onmouseup = function(e) {
		endOfDrag(e);
	}
}

document.getElementById('slides').addEventListener('click', slider.clickOnSlide, false);
