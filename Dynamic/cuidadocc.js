let boton1 = document.getElementById("pl1");
let boton2 = document.getElementById("pl2");
let boton3 = document.getElementById("pl3");
let boton4 = document.getElementById("sud1");
let boton5 = document.getElementById("sud2");
let boton6 = document.getElementById("sud3");
let boton7 = document.getElementById("ptn1");
let boton8 = document.getElementById("ptn2");
let boton9 = document.getElementById("ptn3");

let val1=0;
let val2=0;
let val3=0;
let val4=0;
let val5=0;
let val6=0;
let val7=0;
let val8=0;
let val9=0;


boton1.addEventListener("click",()=>{
    val1+=100;
    let valor="Playera azul $100"+val1;
    actcarrito(valor);

});
boton2.addEventListener("click",()=>{
    val2+=100;
    let valor="Playera blanca $100"+val2;
    actcarrito(valor);

});
boton3.addEventListener("click",()=>{
    val3+=150;
    let valor="Playera rosa $150"+val3;
    actcarrito(valor);

});
boton4.addEventListener("click",()=>{
    val4+=300;
    let valor="Sudadera roja$300"+val4;
    actcarrito(valor);

});
boton5.addEventListener("click",()=>{
    val5+=250;
    let valor="Sudadera negra $250"+val5;
    actcarrito(valor);

});
boton6.addEventListener("click",()=>{
    val6+=400;
    let valor="Sudadera blanca $400"+val6;
    actcarrito(valor);

});
boton7.addEventListener("click",()=>{
    val7+=200;
    let valor="Pantalon azul $200"+val7;
    actcarrito(valor);

});
boton8.addEventListener("click",()=>{
    val8+=200;
    let valor="PPantalon cafe $200"+val8;
    actcarrito(valor);

});
boton9.addEventListener("click",()=>{
    val9+=300;
    let valor="Pantalon negro $300"+val9;
    actcarrito(valor);
});

let total=(val1+val2+val3+val4+val5+val6+val7+val8+val9);

let carrito=document.getElementById("carrito");

function actcarrito(valor){
    let contenido=document.createElement("div");  
    contenido.textContent= valor;
    carrito.append(contenido);

}
