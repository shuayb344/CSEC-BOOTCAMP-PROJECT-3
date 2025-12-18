const btn = document.querySelector('.btn');
const container = document.querySelector('.js-container');
const h1Text = document.querySelector('.js-h1');
let isOn = false;
btn.addEventListener('click',()=>{
  if(isOn){
    h1Text.innerHTML = 'off';
    container.classList.remove('container2');
  }else{
    h1Text.innerHTML = 'on';
    container.classList.add('container2');
  }
  isOn =!isOn;
});