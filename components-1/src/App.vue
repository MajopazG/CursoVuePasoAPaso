<script setup>
import { ref } from "vue";
import BlogPost from './components/BlogPost.vue';
import ButtonCounter from './components/ButtonCounter.vue';

const posts = ref([
  {title: 'Post 1', id: 1, body: 'Descripcion 1'}, 
  {title: 'Post 2', id: 2, body: 'Descripcion 2'}, 
  {title: 'Post 3', id: 3, body: 'Descripcion 3'}, 
  {title: 'Post 4', id: 4 },
]);

</script>

<template>
  <div class="container">
    <h1>APP</h1>
    <ButtonCounter/>
    <ButtonCounter/>

    <BlogPost 
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :body="post.body "
    ></BlogPost>      
  </div>  
</template>

<style>
</style>
