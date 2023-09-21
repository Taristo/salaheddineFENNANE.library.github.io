let title = document.querySelector('.title');
let turn = 'x';
let squares = [];

function winner ()
{
 for( let i = 1 ;i <10;i++)	
	
	{
 squares[i]	= document.getElementById
 ('tech'+i).innerHTML;
	}
if(squares[1] == squares[2] && squares [2] == squares[3] && squares[1] !== '' )
 {
 	title.innerHTML = `${squares[1]} winner`;
 document.getElementById('tech'+1).style.background ='red';
 document.getElementById('tech'+2).style.background ='red';
document.getElementById('tech'+3).style.background ='red';

	
turn='';
	
 	}
 	
 	
 	
 
else if(squares[4] == squares[5] && squares [5] == squares[6] && squares[5] !== '' )
 { title.innerHTML = `${squares[1]} winner`;
 document.getElementById('tech'+4).style.background ='red';
 document.getElementById('tech'+5).style.background ='red';
document.getElementById('tech'+6).style.background ='red';


turn='';





 }
else if(squares[7] == squares[8] && squares [8] == squares[9] && squares[8] !== '' )
 { title.innerHTML = `${squares[1]} winner`;
 document.getElementById('tech'+7).style.background ='red';
 document.getElementById('tech'+8).style.background ='red';
document.getElementById('tech'+9).style.background ='red';
turn='';

	}
else if(squares[1] == squares[4] && squares [4] == squares[7] && squares[4] !== '' )
 { title.innerHTML = `${squares[1]} winner`;
 document.getElementById('tech'+1).style.background ='red';
 document.getElementById('tech'+4).style.background ='red';
document.getElementById('tech'+7).style.background ='red';


    turn=''; 
 }
else if(squares[2] == squares[5] && squares [5] == squares[8] && squares[5] !== '' )
 {title.innerHTML = `${squares[1]} winner`;
 document.getElementById('tech'+2).style.background ='red';
 document.getElementById('tech'+5).style.background ='red';
document.getElementById('tech'+8).style.background ='red';

turn='';
 }
else if(squares[3] == squares[6] && squares [6] == squares[9] && squares[9] !== '' )
 { title.innerHTML = `${squares[1]} winner`;
 document.getElementById('tech'+3).style.background ='red';
 document.getElementById('tech'+6).style.background ='red';
document.getElementById('tech'+9).style.background ='red';


     turn='';
 }
else if(squares[1] == squares[5] && squares [5] == squares[9] && squares[5] !== '' )
 {title.innerHTML = `${squares[1]} winner`;
 document.getElementById('tech'+1).style.background ='red';
 document.getElementById('tech'+5).style.background ='red';
document.getElementById('tech'+9).style.background ='red';

turn='';
	}
else if(squares[3] == squares[5] && squares [5] == squares[7] && squares[5] !== '' )
 {  title.innerHTML = `${squares[1]} winner`;
 document.getElementById('tech'+7).style.background ='red';
 document.getElementById('tech'+5).style.background ='red';
document.getElementById('tech'+3).style.background ='red';


     turn='';
 }	
}

function game(id) {
	
let element = document.getElementById(id) ;

if(turn === 'x' && element.innerHTML == '')	
{
	element.innerHTML ='x';
    turn = 'o';
    title.innerHTML = 'o';
	
}
else if(turn === 'o' && element.innerHTML == ''){
	element.innerHTML = 'o';
	turn ='x';
	title.innerHTML = 'x';
}	
winner();

}
function Restart(){
let countdown = 0; 

function updateCountdown() {
  countdown++;    
  
  title.textContent += countdown; 


  if (countdown === 4) {
    clearInterval(interval); 
    countdown.textContent = "";
    performAction();
    
  }
}

function performAction() {
 
 document.getElementById('tech'+1).innerHTML='';
 document.getElementById('tech'+2).innerHTML='';
 document.getElementById('tech'+3).innerHTML='';
 document.getElementById('tech'+4).innerHTML='';
 document.getElementById('tech'+5).innerHTML='';
document.getElementById('tech'+6).innerHTML='';
document.getElementById('tech'+7).innerHTML='';
document.getElementById('tech'+8).innerHTML='';
document.getElementById('tech'+9).innerHTML='';
 	title.innerHTML = ` winner undefined`;
 document.getElementById('tech'+1).style.background ='';
 document.getElementById('tech'+2).style.background ='';
document.getElementById('tech'+3).style.background =''; 
document.getElementById('tech'+4).style.background =''; 
document.getElementById('tech'+5).style.background =''; 
document.getElementById('tech'+6).style.background =''; 
document.getElementById('tech'+7).style.background =''; 
document.getElementById('tech'+8).style.background =''; 
document.getElementById('tech'+9).style.background =''; 
}


const interval = setInterval(updateCountdown, 900);
 


	




    
}
	
let numberOfwinnerx = 0;


     
 
const clickButton = document.getElementById('button');


clickButton.addEventListener('click', function() {
 turn= 'x'
 numberOfwinnerx++;   
 document.getElementById('number').textContent = numberOfwinnerx;
});
  