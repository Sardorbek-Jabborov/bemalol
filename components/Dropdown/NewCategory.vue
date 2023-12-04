<template>
  <NewDropdown
      :show="showDropdown"
      :head-class="[
      'flex items-center gap-1 text-gray-700 group transition transition-300 cursor-pointer py-2',
      { '!text-blue !opacity-100': showDropdown },
      { 'text-white': variant === 'transparent' },
    ]"
      :body-class="`!w-[240px] bg-white`"
      @toggle="handleDropdownToggle">
    <template #head>
      <div class="flex gap-2 items-center group hover:cursor-pointer relative">
        <IconsCopy
            class="h-[18px] w-[18px] text-[#999999] group-hover:text-red-light transition-200"/>
        <p class="text-sm text-black-main group-hover:text-red-light transition-200 hidden md:block">
          Категории</p>
      </div>
    </template>
    <template #body>
      <div class="max-h-[336px] py-1.5 overflow-y-auto overflow-x-visible" @click="log">
        <router-link v-for="category in categories" :key="category" :to="category.url"
                     class="flex gap-3 items-center py-2 hover:bg-gray-200 px-2 relative">
          <component :is="category.icon" class="w-7 h-7"/>
          <p class="text-15">{{ category.title }}</p>
        </router-link>
      </div>
    </template>
  </NewDropdown>
</template>
<script setup lang="ts">
import {ref} from "#imports"
import NewDropdown from "~/components/Dropdown/NewDropdown.vue";
import {categories} from "~/data/categories";

const showDropdown = ref(false)

interface Props {
  variant: 'default' | 'transparent'
}

defineProps<Props>()

function handleDropdownToggle(val: boolean) {
  showDropdown.value = val
}

function log() {
  event.stopPropagation()
  console.log("stop")
}

function loglog() {
  console.log("there")
}
</script>

<style scoped>
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #347ED1 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #347ED1;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>