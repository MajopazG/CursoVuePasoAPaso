const web = {
    nombre: 'bluuweb',
    links: {
      enlace: 'www.bluuweb.cl',
    },
    redesSociales: {
      youtube: {
        enlace: 'yotube.com/bluuweb',
        nombre: 'bluuweb yt'
      },
      facebook: {
        enlace: 'facebook.com/bluuweb',
        nombre: 'bluuweb fb'
      }
    }
  }
  console.log(web.redesSociales.youtube.enlace)
  console.log(web)
  
  const enlaceYT = web.redesSociales.youtube.enlace
  console.log(enlaceYT)
  const nombreYT = web.redesSociales.youtube.nombre
  console.log(nombreYT)
  //para reducir codigo utilizar destructuring Obj
  
  //destructuringObj
  const {enlace, nombre} = web.redesSociales.youtube
  console.log(enlace)
  console.log(nombre)