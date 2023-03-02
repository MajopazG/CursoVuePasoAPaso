fetch('https://pokeapi.co/api/v2/pokemon/') //esto espera una promesa
  .then( res => res.json())
  .then( data => {
    //console.log(data.results)
    data.results.forEach(element => {
      //console.log(element.name)
    });
  })
  .catch(error => console.log(error))

  //hacer lo mismo de arriba pero ahorando codigo
  //async Await 
  //El async y await va a proporcionar algo muy parecido a then y catch, solamente que el codigo 
  // de async es mas legible para que nonos toque hacer muchos then
  const obtenerPokemones = async() => {
    try{
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      console.log(data.results)
      data.results.forEach(element => {
        console.log(element.name)
      })
    }catch (error) {
      console.log(error)
    }
  }
  // try y catch, intenta hacer esto y si  no devuelve esto
  obtenerPokemones()