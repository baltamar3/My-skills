var key = document.getElementById("container")
var divSkill=document.getElementById("skills")
var h4=document.getElementsByTagName("h4")
var h1=document.getElementsByTagName("h1")
function mensaje(){
    alert("hola")
}

function move(){
    if(divSkill.className=="skills"){
        h4[0].className="move-left-h"
        h4[0].style.visibility="hidden"
        h1[0].className="move-left-h"
        h1[0].style.visibility="hidden"
        divSkill.className="skills-move"

    }else{
        h4[0].style.visibility="visible"
        h4[0].className="move-righ-h"
        h1[0].className="move-righ-h"
        h1[0].style.visibility="visible"
        divSkill.className="skills"
    }
}

key.onclick=move