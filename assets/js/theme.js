let colors = ['blue', 'yellow', 'green', 'pink', 'grey', 'cyan','white'];
let btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let body = document.querySelector('body');
    body.style.background = randomColor;
})