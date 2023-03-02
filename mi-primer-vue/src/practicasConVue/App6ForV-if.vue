<script setup>
//v-for + v-if + template
const name = 'vue dinamico';
const arrayFrutas = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
];
</script>

<!-- template: es igual a html, se puede copiar igual -->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <!-- v-for y v-if-->
  <!-- El v-if se lee primero con base a esto no toma los valores de for pero tiene una solucion ->  -->
  <br>
  <ul>
    <!-- <li v-for="item in arrayFrutas" :key="item.name">
       **esto es una alternativa para solucionar el problema pero no es la mejor**
      <span v-if = "item.stock > 0"> 
        {{ item.name }} - {{ item.price }}
      </span>
    </li> -->
    <template v-for="item in arrayFrutas" :key="item.name">
      <li v-if = "item.stock > 0">
        {{ item.name }} - {{ item.price }}
      </li>
    </template>
  </ul>
  
</template>

<style>
h1 {
  color: blue;
}
</style>