function saklar(params) {
    let lampu1 = document.getElementById('lampu1') ;

    if(params == "on"){
        lampu1.src = "asset/on.gif";
    }   
    if(params == "off"){
        lampu1.src = "asset/off.gif";
    }

    return lampu1;
}