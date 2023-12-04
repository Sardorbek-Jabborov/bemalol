<template>
  <header>
    <div class="border-b border-[#EDEDED]">
      <div class="container py-1.5 flex justify-between items-center relative">
        <router-link to="/">
          <img src="/bemalol-logo.svg" alt="" class="max-h-9 py-1"/>
        </router-link>
        <div class="flex items-center md:gap-12 gap-6 min-[450px]:mr-0 mr-8">
          <button class="flex items-center gap-2 group" @click="showModal">
            <IconsNavigation class="text-[#999999] md:w-5 w-8 md:h-5 h-8 group-hover:text-red-main transition-200"/>
            <span
                class="text-black-main text-sm group-hover:text-red-main transition-200 hidden md:block">{{
                regionStore.currentRegion
              }}</span>
          </button>
          <router-link to="/" class="">
            <ButtonVButton label="Подать oбъявление" class="hidden min-[450px]:block"/>
            <IconsAdd class="bg-[#55bb00] min-[450px]:hidden absolute p-3 top-0 right-0 h-full w-[48px]"/>
          </router-link>
        </div>
      </div>
    </div>
    <LayoutNavBar/>
    <Transition name="slide-fade">
      <div class="fixed top-0 left-0 w-full h-full z-50 bg-[#2d2d2d8f] hidden opacity-0"
           :class="{ '!flex justify-center opacity-100 overflow-hidden ': isOpen }"
           @click="onClickOutside"
           v-if="isOpen"
      >
        <ModalChooseRegion :show="isOpen" v-if="isOpen" @close="showModal"
                           class="transition-200 modal-content mx-auto bg-[#fff]"
        />
      </div>
    </Transition>
  </header>
</template>
<script setup lang="ts">
import {ref} from "vue"

import {useRegionStore} from "~/store/region";

const regionStore = useRegionStore()
const isOpen = ref(false)

const showModal = () => {
  isOpen.value = !isOpen.value
}

function onClickOutside(event) {
  const modalContent = document.querySelector('.modal-content');
  if (modalContent && !modalContent.contains(event.target)) {
    document.body.style.overflow = 'auto';
    isOpen.value = false;
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>