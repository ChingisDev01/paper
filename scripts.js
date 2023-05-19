//MODEL WINDOW//
let btn = document.querySelector('.logo');
btn.onclick = function(){
	let modelWindow = document.querySelector('.modelWindow');
	modelWindow.style.display = 'block'; 

	let modelWindow__bgc = document.querySelector('.modelWindow__bgc');
	let modelWindow__massage = document.querySelector('.modelWindow__massage');

	if(modelWindow.style.display = 'block'){
		setTimeout(() => modelWindow__massage.classList.add('modelWindow__massage--active'), 0);
		setTimeout(() => modelWindow__bgc.classList.add('modelWindow__bgc--active'), 0);
	}
	modelWindow__bgc.onclick = function(){
		modelWindow.style.display = 'none'; 
	}
}
let modelWindow__massage_text = document.querySelector('.modelWindow__massage-text');
modelWindow__massage_text.innerHTML= 'Hello JS';