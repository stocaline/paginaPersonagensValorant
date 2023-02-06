var btnBreach = document.querySelector('#breach')
var agentName = document.querySelector('#agentName')
var agentImg = document.querySelector('#agentImg')

btnBreach.addEventListener('click', () => {
    agentName.innerHTML='BREACH'
    agentImg.src='./img/breach.png'
    document.body.style.background = 'linear-gradient(5deg, rgba(36,20,0,1) 0%, rgba(121,97,9,1) 31%, rgba(255,252,0,1) 100%)'
})