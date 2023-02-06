var btnReyna = document.querySelector('#reyna')
var agentName = document.querySelector('#agentName')
var agentImg = document.querySelector('#agentImg')

var body = document.querySelector('#body')

btnReyna.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(5deg, rgba(2,0,36,1) 0%, rgba(93,9,121,1) 35%, rgba(214,0,255,1) 100%)'
    agentName.innerHTML = 'REYNA'
    agentImg.src = './img/reyna.png'
})
