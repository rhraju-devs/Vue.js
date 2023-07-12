<script setup>
  // const message = 'Welcome. Get ready to master Vue.js 3!'
  // const preDateMessage ='Today is '

  //   function getDate()
  //   {
  //     const date = new Date();
  //     return date.toDateString()
  //   }

  //   const data = {
  //     message: 'Welcome. Get ready to master Vue.js 3!',
  //     date: '12 Jully, 2023',
  //     task: [1,2,3,4],
  //   }

  import {data, message, preDateMessage, getDate} from './data/data'
</script>

<template>
<h1 class="text-danger">{{ message }}</h1>
<h2>{{ preDateMessage }} <span class="text-bold">{{ getDate() }}</span></h2>
<h4>Printing object data</h4>
<h2>{{ data.message  }}</h2>
<h2>{{ data.date }}</h2>
<h3>Total number of Task is {{ data.task.length }}</h3>
</template>

<style scoped>

</style>
