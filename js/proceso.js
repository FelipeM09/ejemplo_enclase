async function leerJSON(url) {

  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch(err) {

    alert(err);
  }
}

function mostrar(){
  
}


mostrar();
