const cheky1 = document.querySelector('#cheky1');
const cheky2= document.querySelector('#cheky2');
const cheky3= document.querySelector('#cheky3');
const cheky4= document.querySelector('#cheky4');
const cheky5= document.querySelector('#cheky5');
const cheky6= document.querySelector('#cheky6');
const cheky7= document.querySelector('#cheky7');
const cheky8= document.querySelector('#cheky8');
const chekyclass =document.querySelectorAll('.cheky')
const renewal = document.querySelector('#renew')

const paynow1 = document.querySelector('#pay1')
const paynow2 = document.querySelector('#pay2')
const paynow3 = document.querySelector('#pay3')
const paynow4 = document.querySelector('#pay4')
const paynow5 = document.querySelector('#pay5')
const paynow6 = document.querySelector('#pay6')
const paynow7 = document.querySelector('#pay7')
const paynow8 = document.querySelector('#pay8')

cheky1.addEventListener('click', ()=>{
   if(    paynow1.style.background== 'gray'){
    paynow1.style.background= '#114058'

   }else{
    paynow1.style.background= 'gray'
   }
})
cheky2.addEventListener('click', ()=>{
    if(    paynow2.style.background== 'gray'){
     paynow2.style.background= '#114058'
 
    }else{
     paynow2.style.background= 'gray'
    }
 })
 cheky3.addEventListener('click', ()=>{
    if(    paynow3.style.background== 'gray'){
     paynow3.style.background= '#114058'
 
    }else{
     paynow3.style.background= 'gray'
    }
 })
 cheky4.addEventListener('click', ()=>{
    if(    paynow4.style.background== 'gray'){
     paynow4.style.background= '#114058'
 
    }else{
     paynow4.style.background= 'gray'
    }
 })
 cheky5.addEventListener('click', ()=>{
    if(    paynow5.style.background== 'gray'){
     paynow5.style.background= '#114058'
 
    }else{
     paynow5.style.background= 'gray'
    }
 })
 cheky6.addEventListener('click', ()=>{
    if(    paynow6.style.background== 'gray'){
     paynow6.style.background= '#114058'
 
    }else{
     paynow6.style.background= 'gray'
    }
 })
 cheky7.addEventListener('click', ()=>{
    if(    paynow7.style.background== 'gray'){
     paynow7.style.background= '#114058'
 
    }else{
     paynow7.style.background= 'gray'
    }
 })
 cheky8.addEventListener('click', ()=>{
    if(    paynow8.style.background== 'gray'){
     paynow8.style.background= '#114058'
 
    }else{
     paynow8.style.background= 'gray'
    }
    
 })
 function flency(){
    count = 0;
    for (var i=0; i< chekyclass.length; i++){
        if (chekyclass[i].type === "checkbox" && chekyclass[i].checked ===true){
            count++;
            console.log(count)
        }
    }
 }
chekyclass.forEach(checkclass=>{
    checkclass.addEventListener('click', ()=>{
        count = 0;
        for (var i=0; i< chekyclass.length; i++){
            if (chekyclass[i].type === "checkbox" && chekyclass[i].checked ===true){
                count++;
                if(count > 1){
                    renewal.style.display='block'
                }else{
                    renewal.style.display='none'
                }
            }
            
        }
        
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