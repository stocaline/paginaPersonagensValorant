var btnReyna = document.querySelector('#reyna')
var agentName = document.querySelector('#agentName')
var agentImg = document.querySelector('#agentImg')

var abilitName1 = document.querySelector('#abilitName1')
var abilitName2 = document.querySelector('#abilitName2')
var abilitName3 = document.querySelector('#abilitName3')
var abilitName4 = document.querySelector('#abilitName4')
var abilit1 = document.querySelector('#abilit1')
var abilit2 = document.querySelector('#abilit2')
var abilit3 = document.querySelector('#abilit3')
var abilit4 = document.querySelector('#abilit4')

btnReyna.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(5deg, rgba(2,0,36,1) 0%, rgba(93,9,121,1) 35%, rgba(214,0,255,1) 100%)'
    agentName.innerHTML = 'REYNA'
    agentImg.src = './img/reyna.png'

    abilitName1.innerHTML = "<h3>DEVORAR</h3> <p>Consome INSTANTANEAMENTE um orbe de alma próximo, curando -se rapidamente por um curto período. A saúde adquirida por meio dessa habilidade superior a 100 diminuirá com o tempo. Se a Imperatriz estiver ativa, essa habilidade será lançada automaticamente e não consumirá o Soul Orb.</p>"
    abilit1.src= "./img/reyna/devour.png"

    abilitName2.innerHTML = "<h3>LIBERAR</h3> <p>Consome INSTANTANEAMENTE um Soul Orb próximo, tornando-se intangível por um curto período. Se a Imperatriz estiver ativa, também fique invisível.</p>"
    abilit2.src= "./img/reyna/dismiss.png"

    abilitName3.innerHTML = "<h3>OLHAR MALICIOSO</h3> <p>EQUIPE um olho etéreo e destrutível. ATIVE para lançar o olhar a uma curta distância à frente. O olho fará Nearsight de todos os inimigos que olharem para ele.</p>"
    abilit3.src= "./img/reyna/leer.png"

    abilitName4.innerHTML = "<h3>IMPRATRIZ</h3> <p>INSTANTANEAMENTE entre em um frenesi, aumentando drasticamente a velocidade de disparo, equipar e recarregar. Ganhe cargas infinitas de habilidades de Colheita de Almas . Quando um inimigo morre para Reyna, ou morre dentro de 3 segundos após receber dano de Reyna, a duração é renovada.</p>"
    abilit4.src= "./img/reyna/empress.png"
})
