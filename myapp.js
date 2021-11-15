const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const d = new Date();
dateEl.innerHTML = `
	<div class="date">
	${days[d.getDay()]}, ${months[d.getMonth()]}
	<span class="circle">${d.getDate()}
	</span>
	</div>
`

var hr  = d.getHours() ;
var mn   = d.getMinutes();

if(hr < 10)
	hr = '0'+hr;
if(mn <10)
	mn = '0'+mn;

timeEl.innerHTML = `
	<div class="time">${hr}:${mn}</div>
`

toggleEl.addEventListener('click',(e)=>{
	const html = document.querySelector('html');
	if(html.classList.contains('dark')){
		html.classList.remove('dark');
		e.innerHTML = 'Light Mode';
	}
	else
	{
		html.classList.add('dark');
		e.innerHTML = "Dark Mode";
	}

})


function settime()
{
	var hrfc = d.getHours() % 12;
	var mnfc = new Date().getMinutes();
	var scfc = new Date().getSeconds();
	// console.log(scfc);
	hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hrfc,0,11,0,360)}deg)`;
	minuteEl.style.transform =`translate(-50%,-100%) rotate(${scale(mnfc,0,59,0,360)}deg)`;
	secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(scfc,0,59,0,360)}deg)`;
	

	function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
		}
	setTimeout(settime,1000);
}


settime();




















// function clock()
// {
// 	var sec= new Date().getSeconds() ;
// 	console.log(sec);
// 	//secondEl.style.Transform = `rotate(${sec * 6 }deg)`;
// 	secondEl.style.Transform = `rotate('${sec * 6}'deg)`; 
// 	setTimeout(clock,1000);
// }	



// clock();		





























