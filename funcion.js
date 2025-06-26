// Eliminar
function eliminarTarea(id) {
  if (confirm("¿Estás seguro de eliminar esta tarea?")) {
    tareas = tareas.filter(t => t.id !== id);
    guardarTareas();
    mostrarTareas();
  }
}

// Editar
function editarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  document.getElementById("nombre").value = tarea.nombre;
  document.getElementById("descripcion").value = tarea.descripcion;
  document.getElementById("fecha").value = tarea.fecha;
  idEditar = id;
}

// Limpiar inputs
function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("fecha").value = "";
}

// Buscar
document.getElementById("buscar").addEventListener("input", (e) => {
  mostrarTareas(e.target.value);
});