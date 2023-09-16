
function openlinkedin(){
    window.open("https://www.linkedin.com/in/kerolos-khairy-a6673625a/" , "LinkedIn" , "width=600, height=600")
}

function opengithub(){
    window.open("https://github.com/kerllouskhairy987?tab=repositories" , "GitHub" , "width=600,height=600")
}

function openfacebook(){
    window.open("https://www.facebook.com/profile.php?id=100069349486598" , "FaceBook" , "width=500,height=500")
}

function openwhatapp(){
    window.open("https://api.whatsapp.com/send/?phone=201032910697&text&type=phone_number&app_absent=0" , "WhatApp" , "width=400,height=400")
}

// WIDTH TEXT AREA
let text_me = document.querySelector(".text_me");

text_me.addEventListener("keyup" , e =>{
    text_me.style.height = "60px";
    let scHeight = e.target.scrollHeight;
    text_me.style.height =  `${scHeight}px` ;
})