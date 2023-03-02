<script setup>
const name = 'vue dinamico';
const styleColor = "color: red";
const arrayColores = ["blue", "red", "peru"];
const activo = true;
</script>

<!-- template: es igual a html, se puede copiar igual -->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <br>
  <h2>{{ arrayColores }}</h2>
  <br>
  <h2 :style="`color: ${arrayColores[2]}`"> Soy peru</h2> 
  <!-- <h2>
    {{ activo ? "Estoy activo" : "Estoy inactivo"}}
  </h2> -->
  <br>
  <!-- Las directivas -->
  <!-- con el if se destruye del elemento del DOM -->
  <h2 v-if="activo">Estoy activo</h2>
  <p v-if="!activo">Estoy inactivo</p>
  <!-- Otra manera de hacer lo de arriba es con v-if y v-else, deben estar juntos -->
  <h2 v-if="activo">Estoy activo</h2>
  <p v-else>Estoy inactivo</p>
  <br>
  <!-- v-if, v-else, v-else-if -->
  <h2 v-if="activo === true">Estoy activo</h2>
  <p v-else-if="activo === false">Estoy inactivo</p>
  <p v-else>Estoy indeciso</p>

  <!-- v-show -->
  <!-- funciona con un display: none -->
  <h2 v-show="activo">Estoy activo v-show </h2>
</template>

<style>
h1 {
  color: blue;
}
</style>