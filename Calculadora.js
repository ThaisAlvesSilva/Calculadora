
function calcula(tecla){
    if(tecla == ""){
        document.getElementById("expressao").value = "";
    }else if(tecla == "="){
        var calculo =  document.getElementById("expressao").value;
        document.getElementById("expressao").value = eval(calculo);
    }else{
        document.getElementById("expressao").value += tecla;
    }
}
