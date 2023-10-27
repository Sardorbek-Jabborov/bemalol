<template>
  <div class="border-b border-[#E6E6E6]">
    <div class="container py-3 flex justify-between items-center">
      <div
          class=" hidden min-[450px]:flex items-center gap-1 py-1 pl-5 pr-3 bg-[#f5f5f5] border border-transparent focus-within:border-gray-700 rounded-3xl lg:min-w-[320px] transition-300">
        <input
            class="bg-transparent outline-0 w-full text-sm placeholder:font-light placeholder:text-[#777777] placeholder:text-13"
            placeholder="Что вы ищете?"/>
        <button>
          <IconsSearch class="h-4 w-4 text-[#999999]"/>
        </button>
      </div>
      <nav class="min-[500px]:w-auto w-full">
        <ul class="h-full flex justify-center gap-10 items-center">
          <li>
            <IconsSearch class="h-4 w-4 text-[#999999] block min-[450px]:hidden"/>
          </li>
          <li class="flex gap-2 items-center hover:cursor-pointer group">
            <IconsCopy class="h-[18px] w-[18px] text-[#999999] group-hover:text-[#CC3256] transition-300"/>
            <p class="text-sm text-[#202020] group-hover:text-[#CC3256] transition-300 hidden md:block">Категории</p>
          </li>
          <li class="flex gap-2 items-center hover:cursor-pointer group">
            <IconsShop class="h-[18px] w-[18px] text-[#999999] group-hover:text-[#CC3256] transition-300"/>
            <p class="text-sm text-[#202020] group-hover:text-[#CC3256] transition-300 hidden md:block">Магазины</p>
          </li>
          <li class="flex gap-2 items-center hover:cursor-pointer group">
            <IconsStar class="h-[18px] w-[18px] text-[#999999] group-hover:text-[#CC3256] transition-300"/>
            <p class="text-sm text-[#202020] group-hover:text-[#CC3256] transition-300 hidden md:block">0</p>
          </li>
          <li class="hidden min-[990px]:flex gap-2 items-center hover:cursor-pointer group">
            <IconsMessage class="h-[18px] w-[18px] text-[#999999] group-hover:text-[#CC3256] transition-300"/>
            <p class="text-sm text-[#202020] group-hover:text-[#CC3256] transition-300 hidden md:block">Сообщения</p>
          </li>
          <li class="flex gap-2 items-center hover:cursor-pointer group">
            <IconsProfile class="h-[18px] w-[18px] text-[#999999] group-hover:text-[#CC3256] transition-300"/>
            <p class="text-sm text-[#202020] group-hover:text-[#CC3256] transition-300 hidden md:block">Личный
              кабинет</p>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>