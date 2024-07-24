function calculate(){
    let height = document.getElementById("height").value/100
    let altura = document.getElementById("altura").value
    let imc = altura / height **2
    if(imc<18.5){
        window.alert("voçe só ta a capa do batman meu parceiro !")

    }
    else if(imc<24.9){
        window.alert("voçe esta suave meu parceiro")
    }
    else if(imc<29.9){
        window.alert("ta ficando gordinlho em meu parceiro")
    }
    else if(imc>39.9){
        window.alert("ta parecendo o gordão da xj em meu parceiro")
    }

}