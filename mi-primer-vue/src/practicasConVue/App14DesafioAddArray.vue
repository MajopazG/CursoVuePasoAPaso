<script setup>

import {ref, computed} from 'vue'

const name = 'vue dinamico';

let counter =  ref(0);
const arrayFavoritos = ref([]);

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
const add = () => {
  arrayFavoritos.value.push(counter.value)
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

const bloquearBtnAdd = computed (() => {
  const numSearch = arrayFavoritos.value.find(num => num === counter.value);
  //find busca un elemento en el array esto es de javaScript
  if (numSearch === 0) return true;
  return numSearch ? true : false;
  //return numSearch || numSearch === 0
})
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <br>
  <h2 :class="classCounter">{{ counter }}</h2>
  <br>
  <button @click="increment">Aumentar</button>
  <button @click="decrement">Disminuir</button>
  <button @click="reset">Resetear</button>
  <button @click="add" :disabled="bloquearBtnAdd">Add</button>
  <br>
  <ul>
    <li v-for="(num, index) in arrayFavoritos" :key="index">
        {{ num }}
    </li>
  </ul>
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