<template>
  <div class="border-b border-[#E6E6E6]">
    <div class="container py-3 flex justify-between items-center">
      <div
          class=" hidden min-[450px]:flex items-center gap-1 py-1 pl-5 pr-3 bg-[#f5f5f5] border border-transparent focus-within:border-gray-700 rounded-3xl lg:min-w-[320px] transition-200">
        <input
            class="bg-transparent outline-0 w-full text-sm placeholder:font-light placeholder:text-[#777777] placeholder:text-13"
            placeholder="Что вы ищете?"/>
        <button>
          <IconsSearch class="h-4 w-4 text-[#999999]"/>
        </button>
      </div>
      <nav class="min-[500px]:w-auto w-full">
        <ul class="h-full flex justify-center gap-10 items-center select-none">
          <li>
            <IconsSearch class="h-4 w-4 text-[#999999] block min-[450px]:hidden"/>
          </li>

          <li class="relative" @click="toggleDropdown('category')">
            <div class="flex gap-2 items-center group hover:cursor-pointer">
              <IconsCopy
                  class="h-[18px] w-[18px] text-[#999999] group-hover:text-red-light transition-200"/>
              <p class="text-sm text-black-main group-hover:text-red-light transition-200 hidden md:block">
                Категории</p>
            </div>
            <Transition name="dropdown">
              <DropdownCategory :class="[dropdowns.category ? 'block' : 'hidden']"
                                class="absolute top-full left-0 mt-1.5"/>
            </Transition>
          </li>

          <li class="relative" @click="toggleDropdown('shop')">
            <div class="flex gap-2 items-center group hover:cursor-pointer">
              <IconsShop
                  class="h-[18px] w-[18px] text-[#999999] group-hover:text-red-light transition-200"/>
              <p class="text-sm text-black-main group-hover:text-red-light transition-200 hidden md:block">
                Магазины</p>
            </div>
            <Transition name="dropdown">
              <DropdownShop :class="{'hidden': !dropdowns.shop}" class="absolute top-full left-0 mt-1.5"/>
            </Transition>
          </li>

          <li>
            <router-link to="/" class="flex gap-2 items-center hover:cursor-pointer group">
              <IconsStar class="h-[18px] w-[18px] text-[#999999] group-hover:text-red-light transition-200"/>
              <p class="text-sm text-black-main group-hover:text-red-light transition-200 hidden md:block">0</p>
            </router-link>
          </li>

          <li class="hidden min-[990px]:flex gap-2 items-center hover:cursor-pointer group" @click="">
            <IconsMessage class="h-[18px] w-[18px] text-[#999999] group-hover:text-red-light transition-200"/>
            <p class="text-sm text-black-main group-hover:text-red-light transition-200 hidden md:block">Сообщения</p>
          </li>

          <li class="relative" @click="toggleDropdown('cabinet')">
            <div class="flex gap-2 items-center hover:cursor-pointer group">
              <IconsProfile class="h-[18px] w-[18px] text-[#999999] group-hover:text-red-light transition-200"/>
              <p class="text-sm text-black-main group-hover:text-red-light transition-200 hidden md:block">
                Личный кабинет</p>
            </div>
            <Transition name="dropdown">
              <DropdownCabinet :class="{'hidden': !dropdowns.cabinet}" class="absolute top-full left-0 mt-1.5"/>
            </Transition>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const dropdowns = ref({
  category: false,
  shop: false,
  cabinet: false,
})

const toggleDropdown = (dropdown: string) => {
  for (const key in dropdowns.value) {
    if (key !== dropdown) {
      dropdowns.value[key] = false;
    }
  }
  dropdowns.value[dropdown] = !dropdowns.value[dropdown];
};

</script>

<style>
.dropdown-enter-active {
  transition: all 0.2s ease;
}

.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>