<template>
  <div>
    <SectionFilter/>
    <div>
      <CardProduct v-for="product in products" :key="product"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {products} from "~/data/products";
</script>