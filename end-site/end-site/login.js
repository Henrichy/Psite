const container= document.querySelector(".container");
const pwShowHide= document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const logIn = document.querySelector(".login-link");
const fullnm = document.querySelector('#fullnm');
const nmsm = document.querySelector('.nmsm');
const usernm = document.querySelector('.alreadyexist');
const email = document.querySelector('.emaill');
const matching = document.querySelector('.matching');
const usernmid = document.querySelector('#alreadyexist');
const emailid = document.querySelector('#emaill');
const matchingid = document.querySelector('#password-field2');
const fpass = document.querySelector('#fpass');
const formlogin = document.querySelector('#formlogin');
const text = document.querySelector('.texttt');
const regemail =document.querySelector('.regemail');

const fgpassword =document.querySelector('#fgpassword');



/*fgpassword.addEventListener('keyup', ()=>{
    if( fgpassword.value.length > 7 && fgpassword.clicked==false){
        document.querySelector('#submitt').disabled = false;
     
     }else {document.querySelector('#submitt').disabled = true;
      }
    
}) */
document.querySelector('#submitt').addEventListener('click',()=>{
    if(fgpassword.value.length < 8){
        regemail.style.display ='flex'
        
    }else{
        regemail.style.display ='none'
        
        document.querySelector('#submitt').setAttribute('type', 'submit')
    }
    
})
document.querySelector('#loginbtn').addEventListener('click', ()=>{
    if(fullnm.value.length < 6){
       nmsm.style.display='block'
       
          }else{
            nmsm.style.display='none'
          }
    if(usernmid.value.length < 6){
        usernm.style.display='block'
        }else{
         usernm.style.display='none'
        }      
    if(matchingid.value.length < 7){
        document.querySelector('.plscon').style.display='block'
        }else{
            document.querySelector('.plscon').style.display='none'
        } 
    if(emailid.value.length < 6){
        email.style.display='block'
        }else{
         email.style.display='none'
        } 
        if(pass2.value == pass1.value && pass1.value.length >= 7 && emailid.value.length > 6 && matchingid.value.length > 7
        && fullnm.value.length > 6 && usernmid.value.length > 6){ 
           console.log('Loggedin')
         }else{
            console.log('disabled')
         }   
})
text.addEventListener('click', ()=>{
    console.log(text)
   document.querySelector('.container').style.display = 'none'
   document.querySelector('.fpasscontainer').classList.add('active')
    
    document.getElementById('formwrap').classList.remove('active')
})
document.querySelector('.goback').addEventListener('click', ()=>{
    document.querySelector('.container').style.display = 'block'
    document.querySelector('.fpasscontainer').classList.remove('active')
    document.getElementById('formwrap').classList.add('active')
})
fullnm.addEventListener('focus', ()=>{
   nmsm.style.display='block'
})
fullnm.addEventListener('blur', ()=>{
    nmsm.style.display='none'
 })
 
usernmid.addEventListener('focus', ()=>{
    usernm.style.display='block'
 })
 usernmid.addEventListener('blur', ()=>{
     usernm.style.display='none'
  })
 
matchingid.addEventListener('focus', ()=>{
    matching.style.display='block'
 })
 matchingid.addEventListener('blur', ()=>{
     matching.style.display='none'
  })
 
emailid.addEventListener('focus', ()=>{
    email.style.display='block'
 })
 emailid.addEventListener('blur', ()=>{
     email.style.display='none'
  })
    

pwShowHide.forEach(eyeIcon=>{
    eyeIcon.addEventListener("click",()=>{
        pwFields.forEach(pwField=>{
            if(pwField.type ==="password"){
                pwField.type = "text";
                pwShowHide.forEach(icon =>{
                    
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            }else{
                pwField.type= "password";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})
signUp.addEventListener("click", ()=>{
    container.classList.add('active');
    
})
logIn.addEventListener("click", ()=>{
    container.classList.remove('active');
})
function _id(name){
    return document.getElementById(name);
}
function _class(name){
    return document.getElementsByClassName(name);
}
_id("password-field").addEventListener("focus", function(){
    _class('password-policies')[0].classList.add("active");
})
_id("password-field").addEventListener("blur", function(){
    _class('password-policies')[0].classList.remove("active");
})
_id("password-field").addEventListener("keyup", function(){
     let password =_id("password-field").value;
     if (/[A-Z]/.test(password)){
        _class("policy-uppercase")[0].classList.add('active');
     }else{
        _class("policy-uppercase")[0].classList.remove('active');

     }
     if (/[0-9]/.test(password)){
        _class("policy-number")[0].classList.add('active');
     }else{
        _class("policy-number")[0].classList.remove('active');

     }
     if (/[A-Za-z0-9]/.test(password)){
        _class("policy-special")[0].classList.add('active');
     }else{
        _class("policy-special")[0].classList.remove('active');

     }
     if (password.length > 7){
        _class("policy-length")[0].classList.add('active');
     }else{
        _class("policy-length")[0].classList.remove('active');

     }
})
let pass1 = document.querySelector('#password-field');
let pass2 = document.querySelector('#password-field2');
let result = document.querySelector('.matching');

function checkPassword(){
    result.innerText = pass1.value ==pass2.value ?'': 'Passwords dont match';
}
pass1.addEventListener('keyup', ()=>{
    if (pass2.value.length != 0) checkPassword();
   
    
})
pass2.addEventListener('keyup', checkPassword);

function getpasswordStrength(password){
    let s = 0;
    if (password.length >5){
        s++;
            }
    if (password.length >7){
        s++;
    }
    if (/[A-Za-z0-9]/.test(password)){
        s++;
    }
    if (/[0-9]/.test(password)){
        s++;
    }
       if (/[A-Z]/.test(password)){
        s++;
       }
       return s;
}



document.querySelector('#password-field').addEventListener("keyup", function(e){
let password = e.target.value;
    
let strength = getpasswordStrength(password);

let passwordStrengthSpan = document.getElementById('red');
console.log(passwordStrengthSpan)
strength = Math.max(strength, 1); 
passwordStrengthSpan.style.width = strength*20 + "%";
if (strength < 2){
    passwordStrengthSpan.style.background = "#d13636"
 }else if(strength >= 2 && strength <= 3){
    passwordStrengthSpan.style.background = "yellow"
   
 }else if(strength >= 3 && strength <= 4){
    passwordStrengthSpan.style.background = "greenyellow"
 }else{
    passwordStrengthSpan.style.background = "green"

 }
})
document.getElementById("password-field").addEventListener("keyup", function(){
    let password =document.getElementById("password-field").value;
    if (/[A-Z]/.test(password)){
       Threecontainer = document.querySelector(".three");
       Threecontainer.classList.add( "active");

       Threecontainer.classList.replace( "uil-times-circle","uil-check-circle");
       
    }else{
        Threecontainer.classList.remove( "active");
        Threecontainer.classList.replace( "uil-check-circle","uil-times-circle");
    }
    if (/[0-9]/.test(password)){
       Twocontainer =document.querySelector('.two')
       Twocontainer.classList.replace( "uil-times-circle","uil-check-circle");
       Twocontainer.classList.add( "active");
    }else{
        Twocontainer.classList.replace( "uil-check-circle","uil-times-circle");
        Twocontainer.classList.remove( "active");

     }
     if (/[A-Za-z0-9]/.test(password)){
        Fourcontainer =document.querySelector('.four')
       Fourcontainer.classList.replace( "uil-times-circle","uil-check-circle");
       Fourcontainer.classList.add( "active");

    }else{
        Fourcontainer.classList.replace( "uil-check-circle","uil-times-circle");
        Fourcontainer.classList.remove( "active");

     }
     if (password.length > 7){
        Onecontainer =document.querySelector('.one')
        Onecontainer.classList.replace( "uil-times-circle","uil-check-circle");
        Onecontainer.classList.add( "active");

     }else{
         Onecontainer.classList.replace( "uil-check-circle","uil-times-circle");
         Onecontainer.classList.remove( "active");

     }

})

