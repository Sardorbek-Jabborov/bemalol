<template>
  <div>
    <div class="bg-[#f3f3f3]">
      <SectionCategories/>
      <SectionServices/>
    </div>
    <SectionInfo/>
    <CommonMessages v-if="messages" @toggle="switchMessages"/>
  </div>
</template>

<script setup lang="ts">
import {useSeoMeta} from "unhead";
import {ref} from 'vue'

const messages = ref(false)
const switchMessages = () => {
  console.log("received")
  messages.value = !messages.value
}

useSeoMeta({
  title: 'Bemalol.uz - Доска бесплатных объявлений'
})
</script>
