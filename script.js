function displayText(str){
    document.getElementById('data').value+=str
}

function removeItem(){
    document.getElementById('data').value=(document.getElementById('data').value).slice(0,-1)
}

function tabSpace(){
    document.getElementById('data').value+="    "
}

function space(){
    document.getElementById('data').value+=" "
}


function newLine(){
    document.getElementById('data').value+="\n"
}

