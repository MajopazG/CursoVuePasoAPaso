<script setup>
import {ref} from 'vue'

const name = 'vue dinamico';

let counter =  ref(0);
//Ya es una variable reactiva
//cuando se trasforma en una variable reactiva lo que debuelve vue es un objeto tiene la propiedad value(para aceder a la propiedad)

const increment = () => {
  counter.value++;
  console.log(counter);
;}

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <br>
  <h2>{{ counter }}</h2>
  <button @click="increment">Aumentar</button>

</template>

<style>
h1 {
  color: blue;
}
</style>