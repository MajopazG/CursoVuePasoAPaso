// destructuring Objects
const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ['peludo','negro','pequeño']
  }
  
  const nombreMascota = mascota.nombre
  console.log(nombreMascota)
  
  //lo que pasa arriba es igual a lo que pasa abajo
  const {nombre} = mascota
  console.log(nombre)