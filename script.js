document.addEventListener("DOMContentLoaded", () => {
  // Botón para agregar nueva fila a la tabla
  const boton = document.getElementById("agregarFila");
  if (boton) {

    boton.addEventListener("click", () => {
      const tabla = document.querySelector("table");
      if (!tabla) return;
      const nuevaFila = tabla.insertRow();
      nuevaFila.innerHTML =
        "<td>&lt;nav&gt;</td><td>Representa una sección de enlaces de navegación, como menús principales, barras laterales o enlaces internos.</td>";
    });
  }
});



const colorOriginal = window.getComputedStyle(boton).backgroundColor;
    boton.addEventListener("mouseover", () => {
      boton.style.backgroundColor = "orange";
      boton.style.color = "white";
      boton.style.cursor = "pointer";
    });
    boton.addEventListener("mouseout", () => {
      boton.style.backgroundColor = colorOriginal || "";
      boton.style.color = "";
});