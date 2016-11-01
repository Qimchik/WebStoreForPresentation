"use strict";
var filtersSelected={
	'Fashion':'none',
	'Product type':'none',
	'Color':'none',
	'Brand':'none',
	'Size':'none',
	'Price range':'none'
};
var filtersCatalog= (function(){
	let filterForClick=false;
	var makeFilterSelected= function(elem,that){
		for (let i=0;i<that.getElementsByClassName('makeFilterSelected').length;i++) 
			that.getElementsByClassName('makeFilterSelected')[i].classList.remove('makeFilterSelected');
		elem.classList.add('makeFilterSelected');
		document.getElementById(that.getAttribute('filter')).innerHTML=elem.innerHTML;
		if (elem.innerHTML=='Not selected'){
			document.getElementById(that.getAttribute('filter')).parentNode.classList.remove('Selected');
			document.getElementById(that.getAttribute('filter')).parentNode.classList.add('noSelected');
			document.getElementById(that.getAttribute('filter')+'Mobile').classList.remove('makeFilterSelected');
			document.getElementById(that.getAttribute('filter')+'Mobile').innerHTML=that.parentNode.getElementsByTagName('h3')[0].innerHTML;
			//global
			filtersSelected[that.parentNode.getElementsByTagName('h3')[0].innerHTML]='none';
			filteredProduct.showFilteredProduct(filtersSelected);
		}else{
			document.getElementById(that.getAttribute('filter')).parentNode.classList.remove('noSelected');
			document.getElementById(that.getAttribute('filter')).parentNode.classList.add('Selected');
			document.getElementById(that.getAttribute('filter')+'Mobile').classList.add('makeFilterSelected');
			document.getElementById(that.getAttribute('filter')+'Mobile').innerHTML=elem.innerHTML;
			filtersSelected[that.parentNode.getElementsByTagName('h3')[0].innerHTML]=elem.innerHTML;
			filteredProduct.showFilteredProduct(filtersSelected);
		}
		
	},
	selectFilter= function (that) {
		let total=-10;
		if (parseInt(that.style.left)-10<-that.getElementsByClassName('filters2')[0].offsetWidth){
			for(var i=0; i<that.getElementsByClassName('filters2')[0].getElementsByTagName('li').length;i++){
				if (parseInt(that.style.left)+that.getElementsByClassName('filters2')[0].offsetWidth>-total) break;
				else total+=that.getElementsByClassName('filters2')[0].getElementsByTagName('li')[i].offsetWidth+10;
			}
			makeFilterSelected(that.getElementsByClassName('filters2')[0].getElementsByTagName('li')[i-1],that);

		}else{
			total=that.getElementsByTagName('li')[that.getElementsByClassName('filters1')[0].getElementsByTagName('li').length-1].offsetWidth+50;
			for(var i=that.getElementsByClassName('filters1')[0].getElementsByTagName('li').length-2; i>=0;i--){
				if (parseInt(that.style.left)+that.getElementsByClassName('filters1')[0].offsetWidth<total) break;
				else total+=that.getElementsByClassName('filters1')[0].getElementsByTagName('li')[i].offsetWidth+10;
			}
			makeFilterSelected(that.getElementsByClassName('filters1')[0].getElementsByTagName('li')[i+1],that);
		}
	},
	changeFiltersLeft= function(that) {
		selectFilter(that);
		if (parseInt(that.style.left)<=-that.getElementsByClassName('filters1')[0].offsetWidth*2){
			that.style.left=parseInt(that.style.left)+that.getElementsByClassName('filters1')[0].offsetWidth+'px';
			that.getElementsByClassName('filters1')[0].style.left='0px';
		}
		if (parseInt(that.style.left)>=0){
			that.style.left=parseInt(that.style.left)-that.getElementsByClassName('filters1')[0].offsetWidth+'px';
			that.getElementsByClassName('filters2')[0].style.left='0px';
		}
		if (parseInt(that.style.left)<-that.getElementsByClassName('filters1')[0].offsetWidth-20){
			that.getElementsByClassName('filters1')[0].style.left=that.getElementsByClassName('filters1')[0].offsetWidth*2+30+'px';
		}
		if (parseInt(that.style.left)>-that.getElementsByClassName('filters1')[0].offsetWidth-20){
			that.getElementsByClassName('filters1')[0].style.left='0px';
		}
		if (parseInt(that.style.left)>40)
			that.getElementsByClassName('filters2')[0].style.left=-2*that.getElementsByClassName('filters1')[0].offsetWidth+'px';
	},
	moveAt=  function(e,that,xBeg,xSlidesBeg) {
		if (e.which==1){
			that.style.left =xSlidesBeg+Math.floor((e.pageX -xBeg)/2) + 'px';
			changeFiltersLeft(that);
		}
		else {
			changeFiltersLeft(that);
			document.onmousemove = null;
			document.onmouseup=null;
		}
	};
	return {
		chooseFilterByClick:function(elem,that){
			let total=-10;
			if (filterForClick==false && that==undefined) return false;
			if (filterForClick) {
				that=filterForClick;
				elem=elem.target;
				if(elem.tagName=='UL') return false;
			}
		

			if (elem.parentNode.parentNode.classList.toString()=='filters2'){
				for(var i=0; i<that.getElementsByClassName('filters2')[0].getElementsByTagName('li').length;i++){
				if (elem==that.getElementsByClassName('filters2')[0].getElementsByTagName('li')[i]) break;
				else total+=that.getElementsByClassName('filters2')[0].getElementsByTagName('li')[i].offsetWidth+18;
			}
				
				that.classList.add('animate');
				that.style.left=parseInt(that.startLeft)-total-10+'px';
				setTimeout(function(){that.classList.remove('animate')},500);
				changeFiltersLeft(that);
			}else{
				let total=-10;
				for(var i=0; i<that.getElementsByClassName('filters1')[0].getElementsByTagName('li').length;i++){
					if (elem==that.getElementsByClassName('filters1')[0].getElementsByTagName('li')[i]) break;
					else total+=that.getElementsByClassName('filters1')[0].getElementsByTagName('li')[i].offsetWidth+18;
				}
					that.classList.remove('animate')
					that.style.left=parseInt(that.style.left)-parseInt(that.startLeft)+'px';
					changeFiltersLeft(that);

					setTimeout(function () {that.classList.add('animate');that.style.left=parseInt(that.startLeft)-total-10+'px';
						},1);
					setTimeout(function(){that.classList.remove('animate');},500);	
					setTimeout(function(){changeFiltersLeft(that);},250);			
			}
		},
		getGroup:function (){
			let attributs=location.search.replace ( "?", "" ).split("&");
			if (attributs[0].split("=")[1]!=undefined && attributs[0].split("=")[0]=='group'){
				document.getElementById(attributs[0].split("=")[1]).style.color='rgb(241,74,88)';
				return attributs[0].split("=")[1];
			}
		},
		getSearch:function (){
			let attributs=location.search.replace ( "?", "" ).split("&");
			if (attributs[0].split("=")[1]!=undefined && attributs[0].split("=")[0]=='search'){
				return attributs[0].split("=")[1];
			}
		},
		showMenu: function(that){
			filterForClick=false;
			if (document.getElementsByClassName('menuForChooseFilters')[0].style.display!='block'){
				document.getElementsByClassName('menuForChooseFilters')[0].style.display='block';
				that.getElementsByClassName('menuCloseIco')[0].style.display='block';
				let listFiltersMobile=document.getElementById('listFiltersMobile').getElementsByTagName('LI');
				let filter;
				for (let i=0; i<listFiltersMobile.length;i++){
					if (listFiltersMobile[i].classList!=''){
						filter=document.getElementsByClassName('filters2')[i].getElementsByTagName('LI');
						for (let j=0; j<filter.length;j++)
							if (listFiltersMobile[i].innerHTML==filter[j].innerHTML){
								filtersCatalog.chooseFilterByClick(filter[j],document.getElementsByClassName('filters2')[i].parentNode);
								makeFilterSelected(filter[j],document.getElementsByClassName('filters2')[i].parentNode);
							}
					}
				}
				}
			else{
				document.getElementsByClassName('menuForChooseFilters')[0].style.display='none';
				that.getElementsByClassName('menuCloseIco')[0].style.display='none';
			}
		},
		beginDrag:function (e,that,index) {
			let xBeg=e.pageX,xSlidesBeg=parseInt(that.style.left);
			moveAt(e,that,xBeg,xSlidesBeg);
			filterForClick=that;
			
			document.onmousemove = function(e) {
				moveAt(e,that,xBeg,xSlidesBeg);
				if(xBeg-e.pageX>5 || xBeg-e.pageX<-5) filterForClick=false;
			}
			document.onmouseup = function(e) {
				changeFiltersLeft(that);
				document.onmousemove = null;
				document.onmouseup=null;
			}
		}
	}
})();

var dropDown=(function(){
	return{
		showMenu: function (elem,display){
			if (display)
				elem.getElementsByClassName('dropDown')[0].style.display='block';
			else
				elem.getElementsByClassName('dropDown')[0].style.display='none';
		},
		makeFilterSelected: function (event){
			if(event.target.tagName==='LI') {
				let mobileFilterId=event.target.parentNode.parentNode.parentNode.getElementsByTagName('span')[1].id+'Mobile';
				if (event.target.innerHTML=='Not selected'){
					event.target.parentNode.parentNode.parentNode.classList.remove('Selected');
					event.target.parentNode.parentNode.parentNode.classList.add('noSelected');
					event.target.parentNode.parentNode.parentNode.getElementsByTagName('span')[1].innerHTML=event.target.innerHTML;
				
					document.getElementById(mobileFilterId).innerHTML=event.target.parentNode.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML;
					document.getElementById(mobileFilterId).classList.remove('makeFilterSelected');

					//global
					filtersSelected[event.target.parentNode.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML]='none';
					filteredProduct.showFilteredProduct(filtersSelected);

				}else{
					event.target.parentNode.parentNode.parentNode.classList.remove('noSelected');
					event.target.parentNode.parentNode.parentNode.classList.add('Selected');
					event.target.parentNode.parentNode.parentNode.getElementsByTagName('span')[1].innerHTML=event.target.innerHTML;
					document.getElementById(mobileFilterId).innerHTML=event.target.innerHTML;
					document.getElementById(mobileFilterId).classList.add('makeFilterSelected');

					//global
					filtersSelected[event.target.parentNode.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML]=event.target.innerHTML;
					filteredProduct.showFilteredProduct(filtersSelected);
				}
			}
		}
	}
})();


var filteredProduct=(function(){
	let indexEnd=0,
	arrivalsDiv=document.getElementsByClassName('arrivals')[0]
	return {
		showFilteredProduct:function (filtersSelected){
			let filteredArrivals=base.getElementsByFilters(filtersSelected,0,13,filtersCatalog.getGroup(),filtersCatalog.getSearch());
			arrivalsDiv.innerHTML='';
			indexEnd=0;
			filteredProduct.showMore(filtersSelected);
			if (filteredArrivals.length>0){
				document.getElementById('upSelling').style.display='block';
			}
			else {
				document.getElementById('upSelling').style.display='none';
				arrivalsDiv.innerHTML='<div class="noProducts">No products were found</div>';
			}
		},
		showMore:function (filtersSelected){
			let filteredArrivals=base.getElementsByFilters(filtersSelected,indexEnd,13,filtersCatalog.getGroup(),filtersCatalog.getSearch());
			let onclick='';
			if (filteredArrivals.length>12){
				document.getElementById('buttonShowMore').style.display='block';
				indexEnd=filteredArrivals[filteredArrivals.length-1];
				filteredArrivals.length--;
			}
			else document.getElementById('buttonShowMore').style.display='none';
			for (let index=0; index<filteredArrivals.length;index++){
				onclick="window.location.href='item.html?id="+filteredArrivals[index].id+"'";
				arrivalsDiv.innerHTML+=
					'<li class="forEveryArrival">'+	
					'<div onclick="'+onclick+'" class="imgForArrival" style="background-image:url('+filteredArrivals[index].img.imgDestop+')">'+
					'<div class="forEveryArrivalHoverOnImg">'+
					'<span class="quickView">Quick view</span><span class="morePhotos">More photos</span>'+
					'</div></div>'+
					'<span onclick="'+onclick+'" class="nameOfArrival">'+filteredArrivals[index].name+' </span>'+
					'<div class="informationForEveryArrival">'+
					'<span class="commentOfArrival">'+filteredArrivals[index].comment+'</span>'+
					'<span class="priceOfArrival">'+((filteredArrivals[index].price>0)?'£'+filteredArrivals[index].price.toFixed(2):'')+'</span>'+
					'<span class="newOrNot">'+filteredArrivals[index].new+'</span></div></li>';
			}
		}
	}
})();

window.onresize = function(){
	mobile.resize();
	if (document.body.clientWidth>1006){
		document.getElementById('menuForChooseFilters').style.display='none'; 
	}
}
window.onresize();

filteredProduct.showFilteredProduct(filtersSelected);
document.getElementById('filters').addEventListener('click', dropDown.makeFilterSelected, false);
document.getElementById('menuForChooseFilters').addEventListener('click', filtersCatalog.chooseFilterByClick, false);


for (let index=0;index<document.getElementsByClassName('filtersForChoose').length;index++){
	document.getElementsByClassName('filtersForChoose')[index].startLeft=document.getElementsByClassName('filtersForChoose')[index].style.left;
	document.getElementsByClassName('filtersForChoose')[index].onmousedown = 
	function (e) {
		filtersCatalog.beginDrag(e,this,index);
	}
}
