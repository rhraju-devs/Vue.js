<script setup>
  const number = 16
  const animal = "Tiger"
  const searchUrl1 = "https://www.pexels.com/search/tiger"
  const searchUrl2 = "https://www.pexels.com/search/"

  const message = "Welcome. Get ready to master <em>Vue.js 3!</em>"
  const data = "<string>30th June, 2023</string>"

  const location = "Dhaka"
  const weather = "t"

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

<h3>Displaying Html without sanitise</h3>
<h4 v-html="message"></h4>
<h4 v-html="data"></h4>

<p>If else condition</p>
<h1>{{ location }}</h1>
<h2 v-if="weather == 's'">Weather : Sunny</h2>
<h2 v-else-if="weather == 'pc'">Weather : Party Cloudy</h2>
<h2 v-else-if="weather == 'r'">Weather : Rainy</h2>
<h2 v-else-if="weather == 't'">Weather : Thunderstorm</h2>
<h2 v-else>Weather : Cyclone</h2>
</template>

<style scoped>

</style>
