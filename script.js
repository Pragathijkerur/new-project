const button = document.getElementById("btn");
const body = document.body;

const colors = ['red', 'green', 'blue', 'yello', 'pink', 'purple']

body.style.backgroundColor = colors[2]

button.addEventListener('click',ChangeBackground)

function ChangeBackground(){
    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex]
}

