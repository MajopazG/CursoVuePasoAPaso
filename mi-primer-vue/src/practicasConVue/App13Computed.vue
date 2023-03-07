<script setup>

import {ref, computed} from 'vue'
//Computed es similar a metodo, lo que recibe adrentro es una funcion de flecha que siemple debe returnal algo
//se recomienda que cuando se trabaje con datos reactivos se utilize el computed 
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

const classCounter = computed(() => {
  if(counter.value === 0){
    return 'zero'
  }if (counter.value > 0){
    return 'positive'
  }if(counter.value < 0){
    return 'negative'
  }
});
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <br>
  <h2 :class="classCounter">{{ counter }}</h2>
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
.zero{
  color: blueviolet;
}
</style>