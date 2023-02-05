var btn1 = document.querySelector('#show-or-hide1')
var abilitiesTextP1 = document.querySelector('.abilitiesTextP1')
var btn2 = document.querySelector('#show-or-hide2')
var abilitiesTextP2 = document.querySelector('.abilitiesTextP2')

btn1.addEventListener('click', () => {
    if(abilitiesTextP1.style.display === 'flex'){
        abilitiesTextP1.style.display = 'none'
    }else{
        abilitiesTextP1.style.display = 'flex'
    }
})
btn2.addEventListener('click', () => {
    if(abilitiesTextP2.style.display === 'flex'){
        abilitiesTextP2.style.display = 'none'
    }else{
        abilitiesTextP2.style.display = 'flex'
    }
})