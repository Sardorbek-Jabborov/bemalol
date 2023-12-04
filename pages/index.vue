<template>
  <div>
    <div class="bg-[#f3f3f3]">
      <SectionCategories/>
      <SectionServices/>
    </div>
    <SectionInfo/>
  </div>
</template>

<script setup lang="ts">
import {useSeoMeta} from "unhead";

useSeoMeta({
  title: 'Bemalol.uz - Доска бесплатных объявлений'
})
</script>
