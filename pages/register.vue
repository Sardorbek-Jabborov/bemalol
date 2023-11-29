<template>
  <section class="bg-grey-300 py-3">
    <div class="container bg-white p-3">
      <form class="w-[338px] mx-auto pt-8 pb-10">
        <h1 class="bg-[#70A3DB] rounded-[3px] text-xl text-white text-center">Регистрация</h1>
        <CommonInput placeholder="Ваше имя"/>
        <CommonInput placeholder="Ваш Email"/>
        <CommonInput placeholder="Пароль" toggleIcon v-model="password" @typed="log"/>
        <CommonInput placeholder="Повторите пароль" toggleIcon @input="log"/>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import {ref} from "#imports"

const password = ref('')
const log = (data) => {
  console.log(data)
}
</script>