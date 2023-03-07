<script setup>

import {ref} from 'vue'

const name = 'vue dinamico';

let counter =  ref(0);

const increment = () => {
  counter.value++;
  console.log(counter);
};
const decrement = () => {
  counter.value--;
};
const reset = () => {
  counter.value=0;
};

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <br>
  <h2 :class="counter > 0 ? 'positive':'negative'">{{ counter }}</h2>
  <br>
  <button @click="increment">Aumentar</button>
  <br>
  <button @click="decrement">Disminuir</button>
  <br>
  <button @click="reset">Resetear</button>

</template>

<style>
h1 {
  color: blue;
}
.positive {
  color: green;
}
.negative{
  color: red;
}
</style>