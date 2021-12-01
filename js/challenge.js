
let counter = document.querySelector('#counter')

function incrementSeconds() {
    number = parseInt(counter.innerHTML)
    counter.innerText = number + 1
    console.log(number)
};

let myTimer = setInterval(incrementSeconds, 1000)


let minusButton = document.getElementById('minus')
minusButton.addEventListener('click', minusSecond)
function minusSecond() {
    seconds = parseInt(counter.innerHTML)
    counter.innerText = seconds - 1
}

let plusButton = document.getElementById('plus')
plusButton.addEventListener('click', plusSecond)
function plusSecond() {
    seconds = parseInt(counter.innerHTML)
    counter.innerText = seconds + 1
}

let heartButton = document.getElementById('heart')
heartButton.addEventListener('click', likeNumber)
function likeNumber() {
    let ul = document.querySelector('.likes');
    //console.log(ul)
    let li = document.createElement('li');
    ul.appendChild(li)
    li.appendChild(document.createTextNode(`User liked ${counter.innerText}`))
    
}

let pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', pauseCount)
function pauseCount() {
    clearInterval(myTimer)
    document.getElementById('minus').disabled = true
    document.getElementById('plus').disabled = true
    document.getElementById('heart').disabled = true
    document.getElementById('submit').disabled = true
    pauseButton.innerText = 'resume'
}

const form = document.getElementById('comment-form')
const commet = document.getElementById('comments')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    newComment(e.target['comment-input'].value)
    
})

function newComment(comment) {
    p = document.createElement('p')
    p.innerText = comment
    //console.log(p)
    document.querySelector('#list').appendChild(p)
}