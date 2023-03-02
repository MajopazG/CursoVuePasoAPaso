<script setup>
const name = 'vue dinamico';
//metodo - methods
const handleClick = (menssage) => {
  console.log(menssage);
}
</script>

<!-- Template: es igual a html, se puede copiar igual -->
<!-- v-on = @ para escuchar eventos -->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <br>
  <button v-on:click="handleClick('Texto 1')">Activame 1</button>
  <button @click="handleClick('Texto 2')">Activame 2</button>
</template>

<style>
h1 {
  color: blue;
}
</style>