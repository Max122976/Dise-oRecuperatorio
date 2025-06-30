
document.getElementById( " formulario ").addEventListener(" submit ", function (event) {
    event.preventDefault(); 
  
    const nombre = document.getElementById(" nombre ").value;
    const email = document.getElementById(" gmail ").value;
  
   
    if (!email.includes("@") || !email.includes(".")) {
      alert(" ingrese un gmail que sea válido porfa ");
      return;
    }
  
    alert(` Gracias ${nombre} por tu consulta. nos pondremos con usted en contacto pronto`);
  });
  
  
  document.getElementById("titulo").addEventListener("click", function () {
    this.textContent = "¡ Muchisimas gracias por visitarnos que tenga lindo dia ! ";
  });
  