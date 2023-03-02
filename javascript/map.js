//El metodo map() crea un nuevo array con los resultados d la llamada
//a la funcion indicada aplicados a cada uno de sus elementos

fetch('https://pokeapi.co/api/v2/pokemon/') //esto espera una promesa
  .then( res => res.json())
  .then( data => {
    //console.log(data.results)
    let arrayNombres = []
    data.results.forEach(element => {
      //console.log(element.name)
      arrayNombres.push(element.name)
    });
    console.log(arrayNombres)
  })
  .catch(error => console.log(error))

//Async await
//con el map ya no necesitamos que lo recora con forEach, ya que,
//este los recorre  
  const obtenerPokemones = async() => {
    try{
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      //console.log(data.results) para pintar que hay objetos
      //data.results.map(poke => console.log(poke)) para pintar y mostrar todos los elementos
      // data.results.forEach(element => {
      //   console.log(element.name)
      // })
      const arrayNombres = data.results.map(poke => poke.name)
      console.log(arrayNombres)
    }catch (error) {
      console.log(error)
    }
  }
  obtenerPokemones()