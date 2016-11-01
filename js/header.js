"use strict";
var bagHeader=(function(){
	return{
		showBagHeader:function(){
			let totalPrice;
			if (typeof(localStorage)!=='undefined')
				if (typeof(localStorage.bag)!=='undefined'){
				totalPrice=JSON.parse(localStorage.totalPrice);
				if (totalPrice>0)
				document.getElementById('bag').innerHTML='Bag'+' £'+
					((Math.floor(totalPrice/1000)>0)?Math.floor(totalPrice/1000)+' ':'')+
					(totalPrice%1000).toFixed(2)+' ('+localStorage.count+')';
				else document.getElementById('bag').innerHTML='Bag';
			}else document.getElementById('bag').innerHTML='Bag';
		}
	}
})();

bagHeader.showBagHeader();

function searchheader (){
	window.location.href='catalog.html?search='+document.getElementById('search').value;
}
document.getElementById("search")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        searchheader();
    }
});