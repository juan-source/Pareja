
function recibir(){
    // boton.style.left = 300 + "px"
   var uno = 0
    const boton = document.getElementById('button') 
    var valor = Math.floor((Math.random()*900)-500)
    var valory = Math.floor((Math.random()*400)-150)
    console.log(valor)
    boton.style.marginLeft =  valor +"px"
    boton.style.marginTop =  valory +"px"
}
function si(){
    // console.log("buena")
    alertify.alert("Aceptaste!","Sabia que no te podias negar!").set('labelasdasd', 'aceptar')
}

