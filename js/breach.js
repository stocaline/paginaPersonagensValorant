var btnBreach = document.querySelector('#breach')
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

btnBreach.addEventListener('click', () => {
    document.body.style.background = 'linear-gradient(5deg, rgba(36,20,0,1) 0%, rgba(121,97,9,1) 31%, rgba(255,252,0,1) 100%)'
    agentName.innerHTML='BREACH'
    agentImg.src='./img/breach.png'

    abilitName1.innerHTML = "<h3>ESTOPIM</h3> <p>EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.</p>"
    abilit1.src= "./img/breach/flashPoint.png"

    abilitName2.innerHTML = "<h3>FALHA TECTÔNICA</h3> <p>EQUIPE um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona.</p>"
    abilit2.src= "./img/breach/faultLine.png"

    abilitName3.innerHTML = "<h3>PÓS-CHOQUE</h3> <p>EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito.</p>"
    abilit3.src= "./img/breach/aftershock.png"

    abilitName4.innerHTML = "<h3>ONDA TROVEJANTE</h3> <p>EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito.</p>"
    abilit4.src= "./img/breach/rollingThunder.png"
})