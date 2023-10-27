<template>
  <div>
    <div class="border-b border-[#EDEDED]">
      <div class="container py-1.5 flex justify-between items-center relative">
        <router-link to="/">
          <img src="/bemalol-logo.svg" alt="" class="max-h-9 py-1"/>
        </router-link>
        <div class="flex items-center md:gap-12 gap-6 min-[450px]:mr-0 mr-8">
          <button class="flex items-center gap-2 group">
            <IconsNavigation class="text-[#999999] md:w-5 w-8 md:h-5 h-8 group-hover:text-[#db3727] transition-300"/>
            <span
                class="text-[#202020] text-sm group-hover:text-[#db3727] transition-300 hidden md:block">Узбекистан</span>
          </button>
          <router-link to="/" class="">
            <ButtonVButton label="Подать oбъявление" class="hidden min-[450px]:block"/>
            <IconsAdd class="bg-[#55bb00] min-[450px]:hidden absolute p-3 top-0 right-0 h-full w-[48px]"/>
          </router-link>
        </div>
      </div>
    </div>
    <LayoutNavBar/>
  </div>
</template>
<script setup lang="ts">
</script>