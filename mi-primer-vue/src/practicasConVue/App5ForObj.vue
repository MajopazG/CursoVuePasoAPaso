<script setup>
const name = 'vue dinamico';
const objetoFruta = {
            id: 1,
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
        }
</script>

<!-- template: es igual a html, se puede copiar igual -->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <!-- v-for -->
  <br>
  <ul>
    <li v-for="(value, propiedad, index) in objetoFruta" :key="value">
        {{index}} - {{propiedad}}: {{ value }}
    </li>
  </ul>
  
</template>

<style>
h1 {
  color: blue;
}
</style>