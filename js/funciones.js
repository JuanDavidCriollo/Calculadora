// funcion que se ejeucta despues de clickear un boton de la clase boton en la cual se inserta en el campo de operacion
function Insertar(){
	document.getElementById("casilla").value = document.getElementById("casilla").value + this.value;
}
//funcion en lacual se evalua evalua el contenido de el campo de operacion y se escribira hay mismo la respuesta
function Operar(){
	document.getElementById("casilla").value = eval(document.getElementById("casilla").value);
}
//funcion para limpiar el campo de operacion
function Limpiar(){
	document.getElementById("casilla").value = "";
}
//funcion que se ejecutara cuando se cargue la ventana
function Eventos(){
	//en estos tres fragmentos de codigo se va a asignar los eventos onclick a los botones y su respectiva función
	//evento on click asignados a todos los elementos que sean clase boton
	var lista = document.querySelectorAll('.boton');
	for (var i = 0; i < lista.length ; i++){
		lista[i].onclick = Insertar;
	}
	//evento on click asignados a todos los elementos que sean clase boton1
	document.querySelector('.boton1').onclick = Operar;
	//evento on click asignados a todos los elementos que sean clase boton2
	document.querySelector('.boton2').onclick = Limpiar;
}
//evento que direccionara a la funcion Eventos cuando secargue la ventana
window.onload = Eventos;

//funcion que escribe el texto en el lienzo canvas con su respctivo evento
function baner(){
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');

	lienzo.font = "bold 18px  verdana, sans-serif";
	lienzo.textAlign = "center";
	lienzo.textBaseLine= "top";

	lienzo.strokeText("Calculadora ", 210, 25);
}

window.addEventListener("load",baner, false);
