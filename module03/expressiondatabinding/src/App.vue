<script setup>
  const number = 16
  const animal = "Tiger"
  const searchUrl1 = "https://www.pexels.com/search/tiger"
  const searchUrl2 = "https://www.pexels.com/search/"

</script>

<template>
  <h2>Javascript Expressions in data binding</h2>
  <h3>{{ number }} / 4 = {{ number/4 }}</h3>
  <h3>Number check: Odd or Even</h3>
  <h3>{{ number }} is {{ number %2 == 0 ? 'Even' : 'Odd' }}</h3>
<h3>
  <a :href="searchUrl1" target="_blank" rel="noopener noreferrer">Search for {{  animal }}</a>
</h3>

<h3>
  <a target="_blank" :href="`https://www.pexels.com/search/${animal.toLowerCase()}`"> Search for {{ animal }}</a>
</h3>
</template>

<style scoped>

</style>
