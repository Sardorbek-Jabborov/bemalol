<template>
  <div class="w-fit">
    <button v-for="(item, idx) in btnData" :key="idx"
            @click="toggleTab(item)"
            class="py-1 md:py-1.5 px-2 md:px-3 text-13 transition-200 first:rounded-l-[3px] last:rounded-r-[3px] border -ml-[1px] first:ml-0 relative hover:z-50 active:shadow-[inset_0_3px_5px_rgba(0,0,0,.125)]"
            :class="[item.isActive ? 'text-white hover:cursor-default bg-blue-main border-blue-main active:shadow-none z-10' : 'bg-white hover:bg-[#eef5fc] border-[#ccc] hover:border-[#91c0f5]']"
            :disabled="item.isActive"
    >
      {{ item.text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "#imports";

const btnData = reactive([
  {
    text: "USD",
    isActive: true,
  },
  {
    text: "Сум",
    isActive: false,
  }
])

const toggleTab = (clickedItem) => {
  btnData.forEach((item) => {
    item.isActive = item.text === clickedItem.text;
  });
}
</script>