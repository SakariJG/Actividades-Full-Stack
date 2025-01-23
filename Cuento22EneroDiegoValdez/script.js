// Mostrar el título al cargar la página
window.onload = function() {
    document.getElementById("titulo").innerText = "El Viaje de la Estrella Solitaria";
  };
  
  // Mostrar la introducción del cuento
  function mostrarIntroduccion() {
    document.getElementById("contenido").innerHTML = `
      <p>Había una vez una estrella que vivía sola en el vasto cielo nocturno. Aunque brillaba con fuerza, siempre se sentía sola en el inmenso universo. Su mayor deseo era encontrar compañía en su eterno viaje por el cosmos.</p>
    `;
  }
  
  // Mostrar el desarrollo del cuento
  function mostrarDesarrollo() {
    document.getElementById("contenido").innerHTML = `
      <p>Un día, mientras viajaba por una nebulosa, la estrella encontró a un pequeño cometa. El cometa, que viajaba a gran velocidad, le contó historias de los planetas que había visitado y las maravillas que había visto. Juntos comenzaron un viaje lleno de aventuras, explorando galaxias y creando constelaciones.</p>
    `;
  }
  
  // Mostrar el desenlace del cuento
  function mostrarDesenlace() {
    document.getElementById("contenido").innerHTML = `
      <p>Después de muchos años de aventuras, la estrella y el cometa se convirtieron en leyendas en el cielo. Los astrónomos de la Tierra comenzaron a trazar sus movimientos y los niños pedían deseos cuando los veían pasar. Aunque su viaje continuaba, la estrella ya no se sentía sola, pues había encontrado una amistad eterna.</p>
    `;
  }
  