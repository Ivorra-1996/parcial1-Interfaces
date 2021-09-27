
function validarTecla(evt){
  let codigo = (evt.which) ? evt.which : evt.keycode;
  
  if(codigo==8) {
    return true;
  } 
  else if(codigo>=48 && codigo<=57) {
    return true;
  } 
  else{
    return false;
  }
}

function validarPass(){
  let contraseña = document.getElementById('pass');
  if(contraseña.value.length >=4){
      return true;
  }
  else{
      alert('La contraseña debe tener al menos 4 caracteres')
      return false;
  }
}

function sumit(){
  const user = document.getElementById('usuario');
  localStorage.setItem('usuario', user.value);
return validarPass();
}

function obtenerNombreUser(){
  const valor = document.getElementById('nombredeusuario')
  valor.innerHTML = JSON.parse(localStorage.getItem('usuario'))
}
obtenerNombreUser();