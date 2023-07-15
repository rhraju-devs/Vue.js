<!-- <script setup>
    const bgOrange = "bg-orange-400"
    const bgIndigo = "bg-indigo-400"
    const bgGreen = "bg-green-400"

    const weekday = false

    const colors = {
      bgColor:'bg-teal-100',
      borderColor:'border-teal-500',
      textColor: 'text-teal-900'
    }
    const messageType = 'warning'
    if('error' == messageType){
      colors.bgColor = 'bg-red-100'
      colors.borderColor = 'border-red-500'
      colors.textColor = 'text-red-900'
    }

    if('warning' == messageType){
      colors.bgColor = 'bg-orange-100'
      colors.borderColor = 'border-orange-500'
      colors.textColor = 'text-orange-900'
    }

    const customColor = {
      backgroundColor:'bg-teal-100',
      border:'border-teal-500',
      color: 'text-teal-900'
    }

</script>

<template>
    <section class="container mx-auto">
    <h1 class="text-center text-3xl py-12">Class & Style Binding</h1>

    <section class="flex space-x-10">
      <div class="w-1/3 h-16" :class="bgOrange"></div>
      <div class="w-1/3 h-16" :class="bgIndigo"></div>
      <div class="w-1/3 h-16" :class="bgGreen"></div>
    </section>

    <section class="mt-10">
      <div class="h-16 flex items-center justify-center text-white" :class="[weekday ? 'bg-red-600' : 'bg-green-600', weekday == true ? 'text-2xl' : 'text-4xl']">
        It's a weekday!
      </div>
    </section>

    <section class="mt-10">
      <div class=" border-t-4 rounded-b px-4 py-3 shadow-md" :class="[colors.bgColor, colors.borderColor, colors.textColor]">
        <p class="font-bold">Our privacy policy has changed</p>
        <p class="text-sm">Make sure you know how these changes affect you.</p>
      </div>
    </section>

    <section class="mt-10">
      <div class="border-t4 rounded-b px-4 py-3 shadow-md" :class="Object.values(customColor), 'border-t-4'">
        <p class="font-bold">Our privacy policy has changed</p>
        <p class="text-sm">Make sure you know how these changes affect you</p>
      </div>
    </section>
  </section>
</template>

<style scoped>

</style> -->


<script setup>
const bgOrange = 'background-color: rgba(251, 146, 60, 1)'
const bgIndigo = 'background-color: rgba(129, 140, 248, 1)'
const bgGreen = 'background-color: rgba(52, 211, 153, 1)'

const bgRed = 'background-color: rgba(220, 38, 38, 1)'
const bgDarkGreen = 'background-color: rgba(5, 150, 105, 1)'

const colors = {
  borderColor: 'rgba(20, 184, 166, 1)', //rgba(239, 68, 68,1)
  // 'border-color': 'rgba(20, 184, 166, 1)', //rgba(239, 68, 68,1)
  color: 'rgba(19, 78, 74, 1)', //rgba(127, 29, 29,1)
  backgroundColor: 'rgba(204, 251, 241, 1)' //rgba(254, 226, 226,1)
}

const weekday = true
const messageType = 'error'

if('error'==messageType){
  colors.borderColor='rgba(239, 68, 68,1)'
  colors.backgroundColor = 'rgba(254, 226, 226,1)'
  colors.color = 'rgba(127, 29, 29,1)'
}
</script>

<template>
  <section class="container mx-auto">
    <h1 class="text-center text-3xl py-12">Class & Style Binding</h1>

    <section class="flex space-x-10">
      <div class="w-1/3 h-16" :style="bgOrange"></div>
      <div class="w-1/3 h-16" :style="bgIndigo"></div>
      <div class="w-1/3 h-16" :style="bgGreen"></div>
    </section>

    <section class="mt-10">
      <!-- <div class="h-16 flex items-center justify-center text-white" :style="weekday==true?[bgRed,'font-size:20px']:[bgDarkGreen, 'font-size:30px']"> -->
      <div class="h-16 flex items-center justify-center text-white" :style="[weekday == true ? bgRed : bgDarkGreen, weekday == true ? 'font-size:20px' : 'font-size:30px']">
        It's a weekday!
      </div>
    </section>

    <section class="mt-10">
      <div class=" border-t-4  rounded-b  px-4 py-3 shadow-md" :style="colors">
        <p class="font-bold">Our privacy policy has changed</p>
        <p class="text-sm">Make sure you know how these changes affect you.</p>
      </div>
    </section>
  </section>
</template>

<style scoped></style>

