<script setup>
const name = 'vue dinamico';
const arrayFrutas = [
        {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
        },
        {
            name: "Pera",
            price: "$2.00",
            description: "Una pera",
        },
        {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
        },
    ];
</script>

<!-- template: es igual a html, se puede copiar igual -->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <!-- v-for -->
  <br>
  <ul>
    <!-- practica del ejerciciodicho -->
    <li v-for="producto in arrayFrutas" :key="name">
        {{ producto.name }}, {{ producto.price }}, {{ producto.description }}
    </li>
    <!-- corecion -->
    <br>
    <li v-for="producto in arrayFrutas" :key="producto.name">
        {{ producto.name }}, {{ producto.price }}, {{ producto.description }}
    </li>
  </ul>
  
</template>

<style>
h1 {
  color: blue;
}
</style>