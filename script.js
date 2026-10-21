class Contador {
  constructor() {
    this.numero = 0;
  }

  sumar() {
    this.numero++;
  }

  restar() {
    // Solo resta si el contador es mayor que cero.
    if (this.numero > 0) {
      this.numero--;
    } else {
      console.log("El número es cero");
    }
  }

  reiniciar() {
    this.numero = 0;
  }
}

// Creamos un objeto de la clase Contador.
const contador = new Contador();

// Obtenemos el número que aparece en la página.
const pantalla = document.getElementById("numero");

// Actualizamos el contenido visible.
function mostrarNumero() {
  pantalla.textContent = contador.numero;
}

// Al hacer clic en Sumar, aumentamos y mostramos el número.
document.getElementById("sumar").onclick = function () {
  contador.sumar();
  mostrarNumero();
};

// Al hacer clic en Restar, restamos y mostramos el número.
document.getElementById("restar").onclick = function () {
  contador.restar();
  mostrarNumero();
};

// Al hacer clic en Reiniciar, volvemos a cero y mostramos el número.
document.getElementById("reiniciar").onclick = function () {
  contador.reiniciar();
  mostrarNumero();
};
