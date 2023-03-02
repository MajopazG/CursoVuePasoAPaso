//proporciona una interfaz javaScript para acceder y manipular
//partes del canal HTTP tales como peticiones y respuestas.

//consume una api

fetch('https://pokeapi.co/api/v2/pokemon/') //esto espera una promesa
  .then( res => res.json())
  .then( data => {
    console.log(data.results)
    data.results.forEach(element => {
      console.log(element.name)
    });
  })
  .catch(error => console.log(error))