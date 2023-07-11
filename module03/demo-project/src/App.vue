<script setup>
  const message = 'Welcome. Get ready to master Vue.js 3!'
  const preDateMessage ='Today is '

    function getDate()
    {
      const date = new Date();
      return date.toDateString()
    }
</script>

<template>
<h1 class="text-danger">{{ message }}</h1>
<h2>{{ preDateMessage }} <span class="text-bold">{{ getDate() }}</span></h2>
</template>

<style scoped>

</style>
