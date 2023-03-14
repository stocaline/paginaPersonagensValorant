const menuAgent = document.querySelector("#menuAgent");
const selectAgent = document.querySelectorAll(".iconAgent");
const agentName = document.querySelector("#agentName")
const agentDesc = document.querySelector("#aboutAgent")
const agentImg = document.querySelector("#agentImg")
const agentBackgroundImg = document.querySelector("#backgroundImg")

const ability1 = document.querySelector("#abilit1")
const ability2 = document.querySelector("#abilit2")
const ability3 = document.querySelector("#abilit3")
const ability4 = document.querySelector("#abilit4")

const abilitName1 = document.querySelector("#abilitName1")
const abilitName2 = document.querySelector("#abilitName2")
const abilitName3 = document.querySelector("#abilitName3")
const abilitName4 = document.querySelector("#abilitName4")

const baseURL = "https://valorant-api.com/v1/agents/"
const language = "?language=pt-BR"

const agents = [
    "5f8d3a7f-467b-97f3-062c-13acf203c006", //Breach
    "22697a3d-45bf-8dd7-4fec-84a9e28c69d7", //Chamber
    "dade69b4-4f5a-8528-247b-219e5a1facd6", //Fade
    "e370fa57-4757-3604-3648-499e1f642d3f", //Gekko
    "f94c3b30-42be-e959-889c-5aa313dba261", //Raze
    "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc", //Reyna

]

const fetchApi = async (uuid) => {
    const response = await fetch(baseURL + uuid + language)
    const agentData = await response.json()

    return agentData
}


selectAgent.forEach(button => {
    button.addEventListener("click", async () => {
        const agentData = await fetchApi(button.getAttribute("uuid"))

        agentName.innerHTML = agentData.data.displayName
        agentDesc.innerText = `${agentData.data.description}`
        agentImg.src = agentData.data.fullPortrait
        agentBackgroundImg.src = agentData.data.background

        ability1.src = agentData.data.abilities[0].displayIcon
        ability2.src = agentData.data.abilities[1].displayIcon
        ability3.src = agentData.data.abilities[2].displayIcon
        ability4.src = agentData.data.abilities[3].displayIcon

        abilitName1.innerHTML = `<h3>${agentData.data.abilities[0].displayName}</h3>`
        abilitName1.innerHTML += `<p>${agentData.data.abilities[0].description}</p>`

        abilitName2.innerHTML = `<h3>${agentData.data.abilities[1].displayName}</h3>`
        abilitName2.innerHTML += `<p>${agentData.data.abilities[1].description}</p>`

        abilitName3.innerHTML = `<h3>${agentData.data.abilities[2].displayName}</h3>`
        abilitName3.innerHTML += `<p>${agentData.data.abilities[2].description}</p>`

        abilitName4.innerHTML = `<h3>${agentData.data.abilities[3].displayName}</h3>`
        abilitName4.innerHTML += `<p>${agentData.data.abilities[3].description}</p>`
        
        document.body.style.background = `linear-gradient(-110deg, #${agentData.data.backgroundGradientColors.join(", #")})`
    })
})