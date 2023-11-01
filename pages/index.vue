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
import {onBeforeMount, ref} from 'vue'

// eslint-disable-next-line no-undef
const {$eventBus} = useNuxtApp()
const messages = ref(false)

onBeforeMount(() => {
  if ($eventBus) {
    $eventBus.listen("popUp", () => {
      console.log("Event 'popUp' received")
      switchMessages()
    })
  } else {
    console.error("$eventBus is not available")
  }
  console.log($eventBus)
})

const switchMessages = () => {
  messages.value = !messages.value
}
</script>
