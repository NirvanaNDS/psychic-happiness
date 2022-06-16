const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const ThemeToogleBtn = document.querySelector('.theme-toogler');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){
            display.innerText = '';
        } else if (item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        }  else if (display.innerText == '' && item.id == 'equal'){
            display.innerText = 'empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})




const calculator = document.querySelector('.calculator');
const toogleicon = document.querySelector('.toogler-icon');
let isDark = true;
ThemeToogleBtn.addEventListener('click', ()=>{
  container.classList.toggle('white')
  alert('be carefully !FW!')
})
