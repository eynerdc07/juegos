document.getElementById("comprar").addEventListener("click", function() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var juego = document.getElementById("juego").value;
  var cantidad = document.getElementById("cantidad").value;
  var tarjeta = document.getElementById("tarjeta").value;

  if (nombre == "" || correo == "" || juego == "juego1" || cantidad == "" || tarjeta == "") {
    alert("Por favor, ingrese todos los datos requeridos.");
    return false;
  }
});




document.getElementById("enviar").addEventListener("click", function() {
  var correo = document.querySelector('input[type="email"]').value;

  window.location.href = "https://mail.google.com/mail/u/0/?ogbl#inbox" + correo;
});
