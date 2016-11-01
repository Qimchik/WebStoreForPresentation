"use strict";
var order=(function(){
	let item={},
	id=(function (){
		let attributs=location.search.replace ( "?", "" ).split("&");
		return +attributs[0].split("=")[1];
	})();
	(function (){
		item=base.getElementByIdItem(id);
		let sizes=document.getElementById('sizes'),
		colors=document.getElementById('colors'),
		images=document.getElementById('images');
		bagHeader.showBagHeader();
		document.getElementById('mainImage').innerHTML='<img src="'+item.img.bigImg[0]+'" alt="mainImage"/>';
		
		if (item.img.bigImg.length>1)
		for (let i=0;i<item.img.bigImg.length;i++){
			images.innerHTML+='<div onclick="order.changeMainImg('+i+',this)" class="smallImage">'+'<img src="'+item.img.bigImg[i]+'" alt="mainImage"/>'+'</div>';
		}

		images.getElementsByClassName('smallImage')[0].classList.add('selectedImg');

		document.getElementById('nameOfItem').innerHTML=item.name;
		document.getElementById('informationOfItem').innerHTML=item.information;
		document.getElementById('priceOfItem').innerHTML=((item.price>0)?'£'+item.price.toFixed(2):'');

		for (let i in item.filters['Size']){
			sizes.innerHTML+='<input type="button" onclick="order.changeSize(this)" class="buttonItemChoose hoverBackground" value="'+item.filters['Size'][i]+'"/>';
		}
		sizes.getElementsByClassName('buttonItemChoose hoverBackground')[0].classList.add('sizeSelected');
		for (let i in item.filters['Color']){
			colors.innerHTML+='<input type="button" onclick="order.changeColor(this)" class="buttonItemChoose hoverBackground" value="'+item.filters['Color'][i]+'"/>';
		}
		colors.getElementsByClassName('buttonItemChoose hoverBackground')[0].classList.add('colorSelected');
	})();
return{
	changeSize:function (elem){
		document.getElementsByClassName('sizeSelected')[0].classList.remove('sizeSelected');
		elem.classList.add('sizeSelected'); 
	},
	changeColor:function (elem){
		document.getElementsByClassName('colorSelected')[0].classList.remove('colorSelected');
		elem.classList.add('colorSelected'); 
	},
	changeMainImg:function(indexOfImg,elem){
		document.getElementById('mainImage').innerHTML='<img src="'+item.img.bigImg[indexOfImg]+'" alt="mainImage"/>';
		document.getElementsByClassName('selectedImg')[0].classList.remove('selectedImg');
		elem.classList.add('selectedImg');
	},
	addToBag:function (){
		let putIntoBag={},allpurchase=[];
		let flag;
		putIntoBag.id=id;
		putIntoBag.size=sizes.getElementsByClassName('sizeSelected')[0].value;
		putIntoBag.color=colors.getElementsByClassName('colorSelected')[0].value;
		putIntoBag.quantity=1;
	
		
		if (typeof(localStorage)=='undefined'){
			alert('Storage turned off...');
		}else if (typeof(localStorage.bag)=='undefined'){
			localStorage.setItem('bag',JSON.stringify([putIntoBag]));
			localStorage.setItem('totalPrice',item.price);
			localStorage.setItem('count','1');	
		}else{
			allpurchase=JSON.parse(localStorage.getItem('bag'));
			flag=false;
			for(var index=0;index<allpurchase.length;index++){
				if (allpurchase[index].id===putIntoBag.id &&
				allpurchase[index].size===putIntoBag.size &&
				allpurchase[index].color===putIntoBag.color ) {
					flag=true;
					break;
				}
			}
			if (flag) allpurchase[index].quantity++;
			else allpurchase.push(putIntoBag);
			localStorage.setItem('bag',JSON.stringify(allpurchase));
			localStorage.setItem('totalPrice',+localStorage.getItem('totalPrice')+item.price);
			localStorage.setItem('count',+localStorage.getItem('count')+1);
		}
		bagHeader.showBagHeader();
		//window.location.href='shopping_bag.html';
	}
}
})();
window.onresize = function(){
	mobile.resize();
}
window.onresize();