var repositorio1 = document.getElementById("repositorio1");
var pagina1 = document.getElementById("pagina1");

var repositorio2 = document.getElementById("repositorio2");
var pagina2 = document.getElementById("pagina2");

var video = document.getElementById("video");

repositorio1.addEventListener("click", function() {
  var url = repositorio1.getAttribute("data-url");
  window.location.href = url;
});

pagina1.addEventListener("click", function() {
  var url = pagina1.getAttribute("data-url");
  window.location.href = url;
});

repositorio2.addEventListener("click", function() {
  var url = repositorio2.getAttribute("data-url");
  window.location.href = url;
});

pagina2.addEventListener("click", function() {
  var url = pagina2.getAttribute("data-url");
  window.location.href = url;
});


video.addEventListener("click", function() {
  var url = video.getAttribute("data-url");
  window.location.href = url;
});

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 800); 
    }
  });
});


/*Validacion del campo "nombre" en formularios*/

function validarFormulario() {
  var nombre = document.getElementById("nombre").value.trim();

  if (nombre === "") {
    mostrarError("El campo Nombre no debe estar en blanco.");
    return false; 
  }

  if (nombre.length > 50) {
    mostrarError("El campo Nombre debe contener máximo 50 caracteres.");
    return false; 
  }

  return true;
}

function mostrarError(mensaje) {

  alert("Complete correctamente los campos en el area contacto");
}

/*validacion del campo correo*/

function validarFormulario() {
  var correo = document.getElementById("correo").value.trim();

  if (correo === "") {
    mostrarError("El campo E-mail no debe estar en blanco.");
    return false;
  }

  var formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formatoCorreo.test(correo)) {
    mostrarError("El campo E-mail debe tener un formato válido.");
    return false; 
  }

  return true;
}

function mostrarError(mensaje) {
  alert("Complete correctamente los campos en el area contacto");
}

/* validar campo asunto */

function validarFormulario() {
  var asunto = document.getElementById("asunto").value.trim();

  if (asunto === "") {
    mostrarError("El campo Asunto no debe estar en blanco.");
    return false;
  }

  if (asunto.length > 50) {
    mostrarError("El campo Asunto debe tener máximo 50 caracteres.");
    return false; 
  }

  return true;
}

function mostrarError(mensaje) {
  alert("Complete correctamente los campos en el area contacto");
}

function validarFormulario() {
  var mensaje = document.getElementById("mensaje").value.trim();

  if (mensaje === "") {
    mostrarError("El campo Mensaje no debe estar en blanco.");
    return false; 
  }

  if (mensaje.length > 300) {
    mostrarError("El campo Mensaje debe tener máximo 300 caracteres.");
    return false; 
  }

  return true;
}

function mostrarError(mensaje) {
  alert("Complete correctamente los campos en el area contacto");
}

/**validar boton enviar */

function validarFormulario() {
  var nombre = document.getElementById("nombre").value.trim();
  var correo = document.getElementById("correo").value.trim();
  var asunto = document.getElementById("asunto").value.trim();
  var mensaje = document.getElementById("mensaje").value.trim();
  var botonEnviar = document.getElementById("botonEnviar");

  if (nombre !== "" && correo !== "" && asunto !== "" && mensaje !== "") {
    botonEnviar.disabled = false; // Habilitar el botón de enviar
  } else {
    botonEnviar.disabled = true; // Deshabilitar el botón de enviar
  }
}

function redireccionar() {
  // Cambiar la URL a la página de modo nocturno
  window.location.href = "https://necrotristan.github.io/Portafolio/";
}