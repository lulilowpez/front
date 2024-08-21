let botonAgregar = document.getElementById("agregar");
let input = document.getElementById("input");
/*let body
botonAgregar.addEventListener("click", ()=> {

}); esto era cuando no usabamos formularios*/


//condicionales if
if (2>1) {
    console.log("el primero es mayor");
}
else {
    console.log("el segundo es mayor");
}
//las comillas son intercambiables, si necesio usar "" uso las simples y viceversa
//swicht estructura de control
const paises = ["argentina", "brasil", "chile"];	
const paisElegido = "";
switch (paisElegido) {
    case "argentina":
        console.log("precio en ARS");
        break;
    case "brasil":
        console.log("precio en Reais");
        break;
    default:
        console.log("moneda no reconocida");
        break;
// bucles - loops : for, while, do-while.
for (let i = 0; i < paises.length; i++)
     {
        const pais = paises[i];
    console.log("for in", pais);
}
for (const pais of paises){
    console.log("for of",pais);
}

paises.forEach((pais) => console.log("forEach",pais));

}
//Formulario
conts elementoFormulario = document.getElementById("formulario");
elementoFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event)
    let valor = input.value;
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = valor;
    document.body.appendChild(nuevoParrafo);
    input.value = "";
})