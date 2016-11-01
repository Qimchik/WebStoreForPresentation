"use strict";
var purchase=(function(){
	let showItem=function (id,color,size,quantity,index){
		let arrivalsDiv=document.getElementsByClassName('arrivals')[0];
		let item=base.getElementByIdItem(id);
		let onclick="window.location.href='item.html?id="+id+"'";
		arrivalsDiv.innerHTML+=
				'<li class="forEveryArrival">'+	
				'<div onclick="'+onclick+'" class="imgForArrival" style="background-image:url('+item.img.imgDestop+')"></div>'+
				'<div class="informationForEveryArrival">'+
				'<span onclick="'+onclick+'" class="nameOfArrival">'+item.name+' </span>'+
				'<span class="color">Color: '+color+' </span>'+
				'<span class="size">Size: '+size+' </span>'+
				'<span class="quantity">Quantity: '+quantity+' </span>'+
				'<span onclick="purchase.removeItem('+index+', '+item.price+')" class="removeItem">Remove item</span>'+
				'</div>'+
				'<span class="priceOfArrival">'+((item.price>0)?'£'+item.price.toFixed(2):'')+'</span>';		
	};
	return {
		loadInformation: function(){
			let item, totalPrice;
			document.getElementsByClassName('arrivals')[0].innerHTML='';
			document.getElementById('buyNow').disabled=false;
			document.getElementById('buyNow').classList.add('hoverBackground');
			if (typeof(localStorage)=='undefined'){
				document.getElementsByClassName('arrivals')[0].innerHTML='<div class="massageInBag">Your bag is empty</div>';
				document.getElementById('buyNow').disabled=true;
				document.getElementById('buyNow').classList.remove('hoverBackground');
				document.getElementById('totalCost').innerHTML='£0.00';
			}	
			else
				if (typeof(localStorage.bag)=='undefined'){
					document.getElementsByClassName('arrivals')[0].innerHTML='<div class="massageInBag">Your bag is empty</div>';
					document.getElementById('buyNow').disabled=true;
					document.getElementById('buyNow').classList.remove('hoverBackground');
					document.getElementById('totalCost').innerHTML='£0.00';
				}else{
					bagHeader.showBagHeader();
					totalPrice=JSON.parse(localStorage.getItem('totalPrice'));
					let items=JSON.parse(localStorage.getItem('bag'));
					for(let index=0;index<items.length;index++){
						showItem(items[index].id,items[index].color,items[index].size,items[index].quantity,index);
					}
					document.getElementById('totalCost').innerHTML='£'+
					((Math.floor(totalPrice/1000)>0)?Math.floor(totalPrice/1000)+' ':'')+
					(totalPrice%1000).toFixed(2);
				}
		},
		removeItem: function(index, price){
			let allpurchase=JSON.parse(localStorage.getItem('bag'));
			localStorage.setItem('totalPrice',+localStorage.getItem('totalPrice')-price);
			localStorage.setItem('count',+localStorage.getItem('count')-1);

			if (allpurchase[index].quantity==1)
				allpurchase.splice(index,1);
			else allpurchase[index].quantity--;
			bagHeader.showBagHeader();
			if (allpurchase.length===0) this.emptybag();
			else localStorage.setItem('bag',JSON.stringify(allpurchase));
			this.loadInformation();
		},
		emptybag: function(){
			delete localStorage.bag;
			localStorage.setItem('totalPrice','0');
			localStorage.setItem('count','0');
			bagHeader.showBagHeader();
			this.loadInformation();
		},
		buy: function(){
			this.emptybag();
			document.getElementsByClassName('arrivals')[0].innerHTML='<div class="massageInBag">Thank you for your purchase</div>';
		}
	}
})();

purchase.loadInformation();
window.onresize = function(){
	mobile.resize();
}
window.onresize();

