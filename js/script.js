const menuAgent = document.querySelector("#menuAgent");
const selectAgent = document.querySelectorAll(".iconAgent");
const agentName = document.querySelector("#agentName")
const agentImg = document.querySelector("#agentImg")


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
        console.log(agentData)
        agentName.innerHTML = agentData.data.displayName
        agentImg.src = agentData.data.fullPortrait
        document.body.style.background = `linear-gradient(-110deg, #${agentData.data.backgroundGradientColors.join(", #")})`
    })
})