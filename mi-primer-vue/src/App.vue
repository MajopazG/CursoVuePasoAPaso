<script setup>
import {ref} from 'vue'

const name = 'vue dinamico';

let counter =  ref(0);

const increment = () => {
  counter.value++;
  console.log(counter);
};

const disminuir = () => {
  counter.value--;
};

const resetear = () => {
  counter.value=0;
};

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <br>
  <h2>{{ counter }}</h2>
  <button @click="increment">Aumentar</button>
  <button @click="disminuir">Disminuir</button>
  <button @click="resetear">Resetear</button>

</template>

<style>
h1 {
  color: blue;
}
</style>