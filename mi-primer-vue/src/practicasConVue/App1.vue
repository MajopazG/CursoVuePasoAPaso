<script>
const name = 'vue dinamico';
const styleColor = "color: red";
// cuando queramos utilizar variables o datos en su script y insertarlos, no se puede hacer con las llaves dobles como en
// los atributos pero si se puede hacer con el v-bind tambien se puede manejar con : , esto hace referencia a la interpolación de texto ( {{}} y : )
const arrayColores = ["blue", "red", "peru"]
const activo = true;
</script>

<!-- template: es igual a html, se puede copiar igual -->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <br>
  <h2>{{ arrayColores }}</h2>
  <br>
  <!-- <h2 :style="styleColor"> Soy rojo</h2> -->
  <h2 :style="`color: ${arrayColores[2]}`"> Soy peru</h2> 
  <br>
  <h2>
    {{ activo ? "Estoy activo" : "Estoy inactivo"}}
  </h2>
</template>

<style>
h1 {
  color: blue;
}
</style>