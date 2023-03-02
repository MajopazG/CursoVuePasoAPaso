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
  <button v-on:click.right.prevent="handleClick('Texto Right')">Activame right</button>
  <button @click="handleClick('Texto Left')">Activame left</button>
  <button @click.middle="handleClick('Texto Middle')">Activame middle</button>
</template>

<style>
h1 {
  color: blue;
}
</style>