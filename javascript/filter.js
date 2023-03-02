//El método Filter crea un nuevo arreglo, el cual no busca modificar el valor de los elementos para el nuevo arreglo, únicamente
// retorna aquellos elementos que cumplan con las condiciones del filtro, los cuales serán almacenados en otro arreglo.
fetch('https://pokeapi.co/api/v2/pokemon/') 
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
//Async - await
  const obtenerPokemones = async() => {
    try{
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      //console.log(data.results)
      //const arrayNombres = data.results.filter(poke => poke.name === 'bulbasaur') //ejemplo para solo pintar es objeto
      const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur') //ejemplo para quitar un objeto
      console.log(arrayNombres)
    }catch (error) {
      console.log(error)
    }
  }
  obtenerPokemones()