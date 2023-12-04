<template>
  <div class="h-full w-[330px] fixed top-0 bottom-0 right-0 px-5 bg-white shadow-[0_0_14px_rgba(0,_0,_0,_0.1)] z-40">
    <div class="absolute right-6 p-2">
      <button class="pt-5 group" @click="toggle">
        <IconsClose class="w-3 h-3 text-[#AAAAAA] group-hover:text-red-main transition-200"/>
      </button>
    </div>
    <div class="flex flex-col h-full justify-center">
      <IconsChat class="mx-auto"/>
      <h3 class="mt-6 text-22 text-center text-black-main">Общаться — легко</h3>
      <p class="py-5 text-sm">
        Перейдите на страницу объявления, чтобы написать продавцу. Не забудьте авторизоваться.
      </p>
      <div class="mx-auto">
        <ButtonSecondary label="Войти" variant="blue" class="w-[170px]"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["toggle"])

const toggle = () => {
  emit("toggle")
}
</script>