<script setup>
const name = 'vue dinamico';
//metodo - methods
const handleClick = () => {
  console.log('Me diste click');
}
</script>

<!-- template: es igual a html, se puede copiar igual -->
<!-- v-on = @ para escuchar eventos-->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <br>
  <button v-on:click="handleClick">Activame 1</button>
  <button @click="handleClick">Activame 2</button>
</template>

<style>
h1 {
  color: blue;
}
</style>