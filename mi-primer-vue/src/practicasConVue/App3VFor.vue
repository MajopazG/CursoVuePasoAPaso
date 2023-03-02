<script setup>
const name = 'vue dinamico';
const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
</script>

<!-- template: es igual a html, se puede copiar igual -->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <!-- v-for -->
  <br>
  <ul>
    <li v-for="(fruta, index) in arrayFrutas" :key="index">
    {{index}} - {{ fruta }}
    </li>
  </ul>
  
</template>

<style>
h1 {
  color: blue;
}
</style>