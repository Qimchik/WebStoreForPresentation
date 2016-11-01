"use strict";
(function showNewItems(){
	let arrivalsDiv=document.getElementsByClassName('arrivals')[0];
	let filteredArrivals=base.getNewElements(4);
	let onclick='';
	for (let index in filteredArrivals){
		onclick="window.location.href='item.html?id="+filteredArrivals[index].id+"'";
		arrivalsDiv.innerHTML+=
			'<li onclick="'+onclick+'" class="forEveryArrival">'+
			'<div class="imgForArrival" style="background-image:url('+filteredArrivals[index].img.imgDestop+')">'+
			'<div class="forEveryArrivalHoverOnImg">'+
			'<span class="quickView">Quick view</span><span class="morePhotos">More photos</span>'+
			'</div></div>'+
			'<span class="nameOfArrival">'+filteredArrivals[index].name+' </span>'+
			'<div class="informationForEveryArrival">'+
			'<span class="priceOfArrival">'+((filteredArrivals[index].price>0)?'£'+filteredArrivals[index].price.toFixed(2):'')+'</span>'+
			'</span></div></li>';
	}
})();

window.onresize = function(){
	mobile.resize();
	slider.resize();
}
window.onresize();


