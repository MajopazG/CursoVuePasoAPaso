<script setup>
import { ref } from 'vue';

const Counter = ref(0)
const increment = () => Counter.value ++
</script>

<template>
    <button @click="increment">Counter {{ Counter }}</button>
</template>