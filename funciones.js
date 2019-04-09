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
