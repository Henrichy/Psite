const sortinput =document.querySelector('#sortcategory')
const dropdown =document.querySelector('.dropdown')
const allli =document.querySelectorAll('#allli')
const angleup =document.querySelector('.sort .uil')
angleup.addEventListener('click', ()=>{
    if(dropdown.style.display == 'block'){
        dropdown.style.display = 'none'
        angleup.classList.replace('uil-angle-down', 'uil-angle-up')
    }else{
        dropdown.style.display = 'block'
        angleup.classList.replace('uil-angle-up', 'uil-angle-down')

    }
})

allli.forEach(all =>{
    all.addEventListener('click', ()=>{
        sortinput.value = all.innerText
        dropdown.style.display = 'none'
    })
})
document.querySelector('#aangleup').addEventListener('click', ()=>{
    if(document.querySelector('.adropdown').style.display == 'flex'){
        document.querySelector('.adropdown').style.display = 'none'
        document.querySelector('#aangleup').classList.replace('uil-angle-down', 'uil-angle-up')
    }else{
        document.querySelector('.adropdown').style.display = 'flex'
        document.querySelector('#aangleup').classList.replace('uil-angle-up', 'uil-angle-down')

    }
})
document.querySelector('.lia').addEventListener('mouseover',()=>{
    document.querySelector('.aa').style.color='white'

})
document.querySelector('.lia').addEventListener('mouseout',()=>{
    document.querySelector('.aa').style.color='black'

})
document.querySelector('.lib').addEventListener('mouseover',()=>{
    document.querySelector('.ab').style.color='white'
})
document.querySelector('.lib').addEventListener('mouseout',()=>{
    document.querySelector('.ab').style.color='black'

})
document.querySelector('.lic').addEventListener('mouseover',()=>{
    document.querySelector('.ac').style.color='white'
})
document.querySelector('.lic').addEventListener('mouseout',()=>{
    document.querySelector('.ac').style.color='black'

})
document.querySelector('.lid').addEventListener('mouseover',()=>{
    document.querySelector('.ad').style.color='white'
})
document.querySelector('.lid').addEventListener('mouseout',()=>{
    document.querySelector('.ad').style.color='black'

})