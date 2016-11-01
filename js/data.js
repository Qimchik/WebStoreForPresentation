"use strict"
var base=(function(){
	var allArrivals=[];
allArrivals[0]={
	id:1,name:'Only Skinny Jeans',comment:'',price:65.5,new:'New',
	img:{
		imgDestop:'img/products/arrivals1/desktop.png',
		imgTablet:'img/products/arrivals1/desktop.png',
		imgMobile:'img/products/arrivals1/desktop.png',
		bigImg:['img/products/arrivals1/imgbig1.png',
		'img/products/arrivals1/imgbig2.png']},
	filters:{
		'Fashion':['Sport'],
		'Product type':['Coats'],
		'Color':['Black','Green'],
		'Brand':['Nike'],
		'Size':['UK 20','UK 22'],
		'Price range':['£100-£199']
	},
	groups:{ 
		'women':true,
		'men':false,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':false,
		'clearance':false,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[1]={
	id:2,name:'Only Skinny Jeans',comment:'',price:15,new:'New',
		img:{
		imgDestop:'img/products/arrivals2/desktop.png',
		imgTablet:'img/products/arrivals2/desktop.png',
		imgMobile:'img/products/arrivals2/desktop.png',
		bigImg:['img/products/arrivals2/imgbig1.png',
		'img/products/arrivals2/imgbig2.png']},
	filters:{
		'Fashion':['Class'],
		'Product type':['Skirts'],
		'Color':['Green'],
		'Brand':['Antipodium'],
		'Size':['UK 18'],
		'Price range':['TO £99']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':true,
		'clearance':false,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[2]={
	id:3,name:'Dress Martin',comment:'120.00 -25%',price:58.25,new:'',
		img:{
		imgDestop:'img/products/arrivals3/desktop.png',
		imgTablet:'img/products/arrivals3/desktop.png',
		imgMobile:'img/products/arrivals3/desktop.png',
		bigImg:['img/products/arrivals3/imgbig1.png',
		'img/products/arrivals3/imgbig2.png']},
	filters:{
		'Fashion':['Class'],
		'Product type':['Skirts'],
		'Color':['Red','Silver'],
		'Brand':['Antipodium'],
		'Size':['UK 18','UK 20'],
		'Price range':['TO £99']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':false,
		'accessories':false,
		'sale':true,
		'newarrivals':false,
		'clearance':false,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[3]={
	id:4,name:'Dress Karina',comment:'',price:158.25,new:'New',
		img:{
		imgDestop:'img/products/arrivals4/desktop.png',
		imgTablet:'img/products/arrivals4/desktop.png',
		imgMobile:'img/products/arrivals4/desktop.png',
		bigImg:['img/products/arrivals4/imgbig1.png',
		'img/products/arrivals4/imgbig2.png',
		'img/products/arrivals4/imgbig3.png']},
	filters:{
		'Fashion':['Class'],
		'Product type':['Skirts'],
		'Color':['Yellow','Silver'],
		'Brand':['Antipodium'],
		'Size':['UK 18','UK 20'],
		'Price range':['£100-£199']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':true,
		'clearance':true,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}


allArrivals[4]={
	id:5,name:'Dress Marina',comment:'',price:558.25,new:'',
		img:{
		imgDestop:'img/products/arrivals5/desktop.png',
		imgTablet:'img/products/arrivals5/desktop.png',
		imgMobile:'img/products/arrivals5/desktop.png',
		bigImg:['img/products/arrivals5/imgbig1.png',
		'img/products/arrivals5/imgbig2.png']},
	filters:{
		'Fashion':['Casual style'],
		'Product type':['Jumpers'],
		'Color':['Green'],
		'Brand':['River Island'],
		'Size':['UK 22L','UK 20S'],
		'Price range':['From £400']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':false,
		'clearance':false,
		'storelocator':true
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}
allArrivals[5]={
	id:6,name:'T-Shirt Nescafe',comment:'',price:258.25,new:'',
		img:{
		imgDestop:'img/products/arrivals6/desktop.png',
		imgTablet:'img/products/arrivals6/desktop.png',
		imgMobile:'img/products/arrivals6/desktop.png',
		bigImg:['img/products/arrivals6/imgbig1.png',
		'img/products/arrivals6/imgbig2.png',
		'img/products/arrivals6/imgbig3.png']},
	filters:{
		'Fashion':['Casual style'],
		'Product type':['Jumpers'],
		'Color':['Red'],
		'Brand':['River Island'],
		'Size':['UK 22','UK 22L'],
		'Price range':['£200-£299']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':false,
		'clearance':false,
		'storelocator':true
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[6]={
	id:7,name:'T-Shirt Nescafe',comment:'',price:218,new:'New',
		img:{
		imgDestop:'img/products/arrivals7/desktop.png',
		imgTablet:'img/products/arrivals7/desktop.png',
		imgMobile:'img/products/arrivals7/desktop.png',
		bigImg:['img/products/arrivals7/imgbig1.png',
		'img/products/arrivals7/imgbig2.png',
		'img/products/arrivals7/imgbig3.png']},
	filters:{
		'Fashion':['Casual style'],
		'Product type':['Jumpers'],
		'Color':['Red'],
		'Brand':['River Island'],
		'Size':['UK 20S','UK 20L'],
		'Price range':['£200-£299']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':true,
		'accessories':false,
		'sale':false,
		'newarrivals':true,
		'clearance':false,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[7]={
	id:8,name:'T-Shirt Rotmans',comment:'',price:178.5,new:'',
		img:{
		imgDestop:'img/products/arrivals8/desktop.png',
		imgTablet:'img/products/arrivals8/desktop.png',
		imgMobile:'img/products/arrivals8/desktop.png',
		bigImg:['img/products/arrivals8/imgbig1.png',
		'img/products/arrivals8/imgbig2.png',
		'img/products/arrivals8/imgbig3.png']},
	filters:{
		'Fashion':['Casual style'],
		'Product type':['Jerse','Coats'],
		'Color':['Red','Gold','Pink'],
		'Brand':['River Island'],
		'Size':['UK 18L','UK 20','UK 20L','UK 22'],
		'Price range':['£100-£199']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':false,
		'accessories':true,
		'sale':false,
		'newarrivals':false,
		'clearance':false,
		'storelocator':true
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[8]={
	id:9,name:'Jaket Grivnes',comment:'',price:72.5,new:'',
		img:{
		imgDestop:'img/products/arrivals9/desktop.png',
		imgTablet:'img/products/arrivals9/desktop.png',
		imgMobile:'img/products/arrivals9/desktop.png',
		bigImg:['img/products/arrivals9/imgbig1.png',
		'img/products/arrivals9/imgbig2.png',
		'img/products/arrivals9/imgbig3.png']},
	filters:{
		'Fashion':['Sport'],
		'Product type':['Jeans'],
		'Color':['Red','Silver','Green'],
		'Brand':['Adidas'],
		'Size':['UK 18','UK 22L'],
		'Price range':['TO £99']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':true,
		'accessories':true,
		'sale':false,
		'newarrivals':false,
		'clearance':false,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[9]={
	id:10,name:'T-Shirt Nikon',comment:'',price:301,new:'',
		img:{
		imgDestop:'img/products/arrivals10/desktop.png',
		imgTablet:'img/products/arrivals10/desktop.png',
		imgMobile:'img/products/arrivals10/desktop.png',
		bigImg:['img/products/arrivals10/imgbig1.png',
		'img/products/arrivals10/imgbig2.png',
		'img/products/arrivals10/imgbig3.png']},
	filters:{
		'Fashion':['Casual style','Class','Business style'],
		'Product type':['Jerse','Skirts'],
		'Color':['Green','Blue','Black'],
		'Brand':['River Island'],
		'Size':['UK 20L','UK 22'],
		'Price range':['£300-£399']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':true,
		'accessories':true,
		'sale':false,
		'newarrivals':false,
		'clearance':false,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[10]={
	id:11,name:'Cool brand product',comment:'',price:318.5,new:'',
		img:{
		imgDestop:'img/products/arrivals11/desktop.png',
		imgTablet:'img/products/arrivals11/desktop.png',
		imgMobile:'img/products/arrivals11/desktop.png',
		bigImg:['img/products/arrivals11/imgbig1.png',
		'img/products/arrivals11/imgbig2.png',
		'img/products/arrivals11/imgbig3.png']},
	filters:{
		'Fashion':['Casual style'],
		'Product type':['Jumpers','Jackets'],
		'Color':['Red','Blue'],
		'Brand':['New Balance','Nike'],
		'Size':['UK 18','UK 20S'],
		'Price range':['£300-£399']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':true,
		'accessories':false,
		'sale':false,
		'newarrivals':true,
		'clearance':false,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[11]={
	id:12,name:'New sport product',comment:'',price:299,new:'',
		img:{
		imgDestop:'img/products/arrivals12/desktop.png',
		imgTablet:'img/products/arrivals12/desktop.png',
		imgMobile:'img/products/arrivals12/desktop.png',
		bigImg:['img/products/arrivals12/imgbig1.png',
		'img/products/arrivals12/imgbig2.png',
		'img/products/arrivals12/imgbig3.png']},
	filters:{
		'Fashion':['Sport'],
		'Product type':['Jumpers','Coats'],
		'Color':['Green','Black','Pink'],
		'Brand':['River Island'],
		'Size':['UK 22','UK 20S','UK 20'],
		'Price range':['£200-£299']
	},
	groups:{
		'women':false,
		'men':false,
		'handbags':false,
		'accessories':true,
		'sale':false,
		'newarrivals':false,
		'clearance':false,
		'storelocator':true
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[12]={
	id:13,name:'Jeans Go-Go',comment:'',price:222.5,new:'',
		img:{
		imgDestop:'img/products/arrivals13/desktop.png',
		imgTablet:'img/products/arrivals13/desktop.png',
		imgMobile:'img/products/arrivals13/desktop.png',
		bigImg:['img/products/arrivals13/imgbig1.png',
		'img/products/arrivals13/imgbig2.png']},
	filters:{
		'Fashion':['Sport','New Look'],
		'Product type':['Jumpers','Dresses'],
		'Color':['Red','Silver'],
		'Brand':['New Balance','Antipodium'],
		'Size':['UK 20S','UK 22L','UK 20'],
		'Price range':['£200-£299']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':false,
		'clearance':true,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[13]={
	id:14,name:'Apple style',comment:'',price:210,new:'',
		img:{
		imgDestop:'img/products/arrivals14/desktop.png',
		imgTablet:'img/products/arrivals14/desktop.png',
		imgMobile:'img/products/arrivals14/desktop.png',
		bigImg:['img/products/arrivals14/imgbig1.png',
		'img/products/arrivals14/imgbig2.png',
		'img/products/arrivals14/imgbig3.png']},
	filters:{
		'Fashion':['Class','New Look'],
		'Product type':['Dresses','Dresses'],
		'Color':['Red','Gold'],
		'Brand':['New Balance','Antipodium'],
		'Size':['UK 20','UK 22','UK 18L'],
		'Price range':['£200-£299']
	},
	groups:{
		'women':true,
		'men':false,
		'handbags':false,
		'accessories':true,
		'sale':false,
		'newarrivals':false,
		'clearance':false,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[14]={
	id:15,name:'Jeans Longli',comment:'',price:109.10,new:'',
		img:{
		imgDestop:'img/products/arrivals15/desktop.png',
		imgTablet:'img/products/arrivals15/desktop.png',
		imgMobile:'img/products/arrivals15/desktop.png',
		bigImg:['img/products/arrivals15/imgbig1.png',
		'img/products/arrivals15/imgbig2.png',
		'img/products/arrivals15/imgbig3.png']},
	filters:{
		'Fashion':['Sport','New Look'],
		'Product type':['Jumpers','Dresses'],
		'Color':['Red','Blue','Gold'],
		'Brand':['New Balance','Antipodium'],
		'Size':['UK 22L', 'UK 18','UK 22S'],
		'Price range':['£100-£199']
	},
	groups:{
		'women':false,
		'men':true,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':false,
		'clearance':true,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[15]={
	id:16,name:'Palata six',comment:'',price:10,new:'',
		img:{
		imgDestop:'img/products/arrivals16/desktop.png',
		imgTablet:'img/products/arrivals16/desktop.png',
		imgMobile:'img/products/arrivals16/desktop.png',
		bigImg:['img/products/arrivals16/imgbig1.png',
		'img/products/arrivals16/imgbig2.png']},
	filters:{
		'Fashion':['Vintage'],
		'Product type':['Jerse','Skirts'],
		'Color':['Red','Silver'],
		'Brand':['New Balance','Antipodium'],
		'Size':['UK 22L','UK 20'],
		'Price range':['TO £99']
	},
	groups:{
		'women':false,
		'men':true,
		'handbags':false,
		'accessories':true,
		'sale':false,
		'newarrivals':false,
		'clearance':true,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[16]={
	id:17,name:'Suit Calara',comment:'',price:189.10,new:'',
		img:{
		imgDestop:'img/products/arrivals17/desktop.png',
		imgTablet:'img/products/arrivals17/desktop.png',
		imgMobile:'img/products/arrivals17/desktop.png',
		bigImg:['img/products/arrivals17/imgbig1.png',
		'img/products/arrivals17/imgbig2.png',
		'img/products/arrivals17/imgbig3.png']},
	filters:{
		'Fashion':['Sport','New Look'],
		'Product type':['Jumpers','Dresses'],
		'Color':['Red','Green','Silver'],
		'Brand':['New Balance','Antipodium'],
		'Size':['UK 22L','UK 20S'],
		'Price range':['£100-£199']
	},
	groups:{
		'women':false,
		'men':true,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':false,
		'clearance':true,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[17]={
	id:18,name:'Kawa Lampa',comment:'',price:289.10,new:'',
		img:{
		imgDestop:'img/products/arrivals18/desktop.png',
		imgTablet:'img/products/arrivals18/desktop.png',
		imgMobile:'img/products/arrivals18/desktop.png',
		bigImg:['img/products/arrivals18/imgbig1.png',
		'img/products/arrivals18/imgbig2.png',
		'img/products/arrivals18/imgbig3.png']},
	filters:{
		'Fashion':['Sport','New Look'],
		'Product type':['Jumpers','Dresses'],
		'Color':['Red'],
		'Brand':['Antipodium'],
		'Size':['UK 18','UK 20'],
		'Price range':['£200-£299']
	},
	groups:{
		'women':false,
		'men':true,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':false,
		'clearance':true,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}


allArrivals[18]={
	id:19,name:'Unti Guliver',comment:'',price:198.10,new:'',
		img:{
		imgDestop:'img/products/arrivals19/desktop.png',
		imgTablet:'img/products/arrivals19/desktop.png',
		imgMobile:'img/products/arrivals19/desktop.png',
		bigImg:['img/products/arrivals19/imgbig1.png',
		'img/products/arrivals19/imgbig2.png',
		'img/products/arrivals19/imgbig3.png']},
	filters:{
		'Fashion':['Business style','New Look'],
		'Product type':['Jackets'],
		'Color':['Green'],
		'Brand':['Antipodium'],
		'Size':['UK 18L','UK 22L'],
		'Price range':['£100-£199']
	},
	groups:{
		'women':false,
		'men':true,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':false,
		'clearance':true,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

allArrivals[19]={
	id:20,name:'Feature space',comment:'',price:258.25,new:'',
		img:{
		imgDestop:'img/products/arrivals20/desktop.png',
		imgTablet:'img/products/arrivals20/desktop.png',
		imgMobile:'img/products/arrivals20/desktop.png',
		bigImg:['img/products/arrivals20/imgbig1.png',
		'img/products/arrivals20/imgbig2.png']},
	filters:{
		'Fashion':['Business style','New Look'],
		'Product type':['Jackets'],
		'Color':['Green'],
		'Brand':['Antipodium'],
		'Size':['UK 18L','UK 18','UK 20'],
		'Price range':['£200-£299']
	},
	groups:{
		'women':false,
		'men':true,
		'handbags':false,
		'accessories':false,
		'sale':false,
		'newarrivals':false,
		'clearance':true,
		'storelocator':false
	},
	information:'Featuring fine Italian wool, this elegant suit has pick-stritch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout.'
}

	let getElementsByGroups=function (elem, group){
		return elem.groups[group];
	},
	getElementsBySearch=function (elem, searchName){
		return elem.name.match(new RegExp(searchName, "i"));
	},
	checkProductsFilters=function (elem, filtersSelected){
		let flag;
		for (let index in filtersSelected){
			flag=false;
			if (filtersSelected[index]!=='none'){
				for (let i in elem.filters[index]){
					if (elem.filters[index][i]==filtersSelected[index]) flag=true;
				}
				} else flag=true;
				if (flag==false) return false;
		}
		return true;
	}


return {
	
	getElementsByFilters:function (filtersSelected,beginItems,maxItems,group,searchName){
		let arrivals=[];
		for(let index=beginItems;index<allArrivals.length;index++){
			if (arrivals.length===maxItems && maxItems!=undefined) {
				arrivals[arrivals.length-1]=index-1;
				return arrivals; 
			}
			if (getElementsBySearch(allArrivals[index],searchName)||searchName==undefined) 
				if (checkProductsFilters(allArrivals[index],filtersSelected)) 
					if (getElementsByGroups(allArrivals[index],group)||group==undefined) 
						arrivals.push(allArrivals[index]);
		}
		return arrivals;
	},
	getNewElements:function (maxItems){
		let arrivals=[];
		for(let index=0;index<allArrivals.length;index++){
			if (arrivals.length===maxItems && maxItems!=undefined) return arrivals; 
			if (allArrivals[index].new==='New') 
				arrivals.push(allArrivals[index]);
		}
		return arrivals;
	},
	getElementByIdItem:function (id){
		for(let index=0;index<allArrivals.length;index++)
			if (allArrivals[index].id===id) return allArrivals[index]; 
	},
}})();