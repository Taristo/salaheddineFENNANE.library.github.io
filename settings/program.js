let myn = document.querySelector('.comment');


function openwork(){
myn.classList.toggle("gouch");
}
var savedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];

function saveText() {

    var textInput = document.getElementById("textInput").value;


    savedTexts.push(textInput);


    localStorage.setItem("savedTexts", JSON.stringify(savedTexts));
}

function displaySavedTexts() {

    console.log("comments:");
    savedTexts.forEach(function(text) {
        console.log(text);
    });
}





let searchForm = document.getElementById('search-form');
let searchResult = document.querySelectorAll('.package');
let result = document.getElementById('list-package');
let searchValue = result.getElementsByTagName("h1");

searchForm.addEventListener("keyup", function(){

for(var i=0 ;i<searchValue.length; i++){

	let value =searchResult[i].getElementsByTagName('h1')[0];
	let filterValue = value.textContent || value.innerHTML;
	if(filterValue.toUpperCase().indexOf(searchForm.value.toUpperCase())>-1){
		searchResult[i].style.display ="";
	
	}
	else{
		searchResult[i].style.display ="none";
	}
	
}	
})
const product = document.getElementById('list-package');
let search = document.getElementById('btn1');
search.onclick = function(){
product.style.display ="block";
} 






function OpenPage1(){
alert(`
ليس من تصميم و لم اقراه كله لكن ان كنت مبتدا سيفيدك و لتطوير مستواك ستجدني منزل بضع كودات جاهزة و  حلله و طور مستواك  
`);

}
function OpenPage2(){
alert(`
ليس من تصميم و لم اقراه كله لكن ان كنت مبتدا سيفيدك و لتطوير مستواك ستجدني منزل بضع كودات جاهزة و  حلله و طور مستواك  
`);


}
function OpenPage3(){
alert(`
ليس من تصميم و لم اقراه كله لكن ان كنت مبتدا سيفيدك و لتطوير مستواك ستجدني منزل بضع كودات جاهزة و  حلله و طور مستواك  
`);


}
function OpenPage4(){
alert(`
هو من تصميمي لكن للاسف انا لا اعرف اشرح جيدا و لازلت مبتدأ  
  `);


}
function OpenPage5(){
alert(`
انيميشن بسيط فقط  ب html و css3من تصميمي


`);    
}

function OpenPage6(){
alert(`
انميشن بسيط ب javascript و css3 من تصميمي


`);
}
function OpenPage7(){
alert(`

عداد تنازلي بسيط ب javascript

`);
}
function OpenPage8(){
alert(`

واجهة دخول ممتازة مع animtion ي زين من جماليته من تصميمي

`);

}
function OpenPage9(){
alert(`

تصميم روبوت فقط ب  css مع انميشن جميل

`)}
function OpenPage10(){
alert(`

لعبة x vs o 
`)}
