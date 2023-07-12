<script setup>
  import {images} from './data/data'
  const image='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  const title= 'Water surrounded by trees and mountains dddddd'
  const link= 'https://unsplash.com/photos/NRQV-hBF10M'

</script>

<template>

    <div class="container">
      <div class="row">
        <div class="col-md-4 broder-primary p-3">
          <img width="300" height="300" v-bind:title="images[0].title" v-bind:src="images[0].image" class="rounded mx-auto d-block" alt="">
          <h3>{{images[0].title}}</h3>
          <a :href="images[0].link" target="_blank" rel="noopener noreferrer">See image</a>
        </div>

        <div class="col-md-4 broder-primary p-3">
          <img width="300" height="300" v-bind:title="images[1].title" v-bind:src="images[1].image" class="rounded mx-auto d-block" alt="">
          <h3>{{images[1].title}}</h3>
          <a :href="images[1].link" target="_blank" rel="noopener noreferrer">See image</a>
        </div>

        <div class="col-md-4 broder-primary p-3">
          <img width="300" height="300" v-bind:title="images[2].title" v-bind:src="images[2].image" class="rounded mx-auto d-block" alt="">
          <h3>{{images[2].title}}</h3>
          <a :href="images[2].link" target="_blank" rel="noopener noreferrer">See image</a>
        </div>
      </div>

      <div class="row py-3"></div>

      <div class="row">
        <div class="col-md-12 broder-primary p-3">
          <img width="300" height="300" v-bind:title="title" v-bind:src="image" class="rounded mx-auto d-block" alt="">
          <h3>{{title}}</h3>
          <a :href="link" target="_blank" rel="noopener noreferrer">See image</a>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
