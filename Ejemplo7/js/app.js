//funcion que suma 2 numeros
function sumar() {
    var x,y, suma
    x=document.getElementById("n1").value
    y=document.getElementById("n2").value
    suma=parseInt(x)+parseInt(y)    
    document.getElementById("resultado_suma").innerHTML = "La Suma es: "+suma 
   
}
//funcion que resta 2 numeros
function restar() {
    var x,y, resta
    x=document.getElementById("n1").value
    y=document.getElementById("n2").value
    resta=parseInt(x)-parseInt(y)    
    document.getElementById("resultado_resta").innerHTML = "La Resta es: "+resta  
}
//funcion que multiplica 2 numeros
function multiplicar() {
    var x,y, multiplicacion
    x=document.getElementById("n1").value
    y=document.getElementById("n2").value
    multiplicacion=parseInt(x)*parseInt(y)    
    document.getElementById("resultado_multiplicacion").innerHTML = "La Multiplicaciòn es: "+multiplicacion 
}
//funcion que divide 2 numero
function dividir() {
    var x,y, division
    x=document.getElementById("n1").value
    y=document.getElementById("n2").value
    division=parseInt(x)/parseInt(y)    
    document.getElementById("resultado_division").innerHTML = "La Division es: "+division 
}

