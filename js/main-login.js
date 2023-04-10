//Inicio de sesion para los tres roles
const seleccion = document.getElementById('miSelect');
const boton = document.getElementById('miBtn');

boton.addEventListener('click', () => {
  const opcion = seleccion.options[seleccion.selectedIndex].value;
  if (opcion) {
    window.location.href = opcion;
  }
});
