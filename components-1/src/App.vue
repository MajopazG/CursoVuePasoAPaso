<script setup>
import { ref } from "vue";

import BlogPost from './components/BlogPost.vue';
import PaginatePots from './components/PaginatePots.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

const posts = ref([]);
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);
const loading = ref(true);

const miFavorito = ref("");

const fijarFavorito = (title) => {
  miFavorito.value = title; 
};

const next = () => {
    inicio.value = inicio.value + postXpage
    fin.value = fin.value + postXpage
};

const previus =() => {
    inicio.value = inicio.value - postXpage
    fin.value = fin.value -postXpage
    // inicio.value += - postXpage
    // fin.value += -postXpage
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => posts.value = data)
    .finally(() => loading.value = false);

</script>

<template>
  <LoadingSpinner v-if="loading"/>
  <div class="container" v-else>
    <h1>APP</h1>
    <h2>Mis Post Favoritos:
      {{ miFavorito || "Sin Favorito" }}
    </h2>

    <PaginatePots @next="next" @previus="previus" :inicio="inicio" :fin="fin" :maxLength="posts.length" class="mb-2"/>

    <BlogPost 
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :body="post.body"
      class="mb-2" 
      @fijarFavorito = "fijarFavorito"
    ></BlogPost>      
  </div>  
</template>

<style>
</style>
