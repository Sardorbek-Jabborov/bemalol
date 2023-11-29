<template>
  <section class="bg-grey-300 py-3">
    <div class="container bg-white p-3">
      <img src="@/assets/images/user.png" alt="user-image" class="mx-auto mt-2.5">
      <form class="w-[338px] mx-auto" @submit.prevent>
        <p class="text-center mt-3 mb-5 text-xl">Вход в личный кабинет</p>
        <input type="email"
               class="bg-white w-full px-3 py-1.5 text-sm rounded-[20px] border border-[#ccc] focus:border-[#67a1e3] focus:shadow-[0_0_0px_3px_#e7edf5] transition-200 outline-0 placeholder-[#777777]"
               placeholder="E-mail">
        <div
            class="flex items-center justify-between mt-4 bg-white px-3 py-1.5 text-sm rounded-[20px] border border-[#ccc] focus-within:border-[#67a1e3] focus-within:shadow-[0_0_0px_3px_#e7edf5] transition-200">
          <input :type="inputType" class="w-full outline-0 placeholder-[#777777]" placeholder="Пароль">
          <div @click="toggleIcon" class="hover:cursor-pointer">
            <IconsEyeClosed v-show="!isVisible"/>
            <IconsEye v-show="isVisible"/>
          </div>
        </div>
        <router-link to="/"
                     class="mt-1 w-full block text-end text-13 text-[#0363CD] hover:text-red-light focus:text-red-light transition-200 select-none">
          Напомнить пароль
        </router-link>
        <ButtonVButton label="Войти" variant="secondary" class="block min-w-[170px] mt-4 mx-auto"/>
        <p class="text-center mt-8 text-13 text-[#777777] hover:cursor-default">или войти через соцсеть</p>
        <ul class="flex justify-center mt-2 gap-3 pb-6 border-b border-[#EEEEEE]">
          <li>
            <router-link to="https://www.youtube.com/">
              <IconsYoutube/>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <IconsGoogle/>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <IconsVk/>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <IconsOk/>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <IconsFacebook/>
            </router-link>
          </li>
        </ul>
        <router-link to="/register"
                     class="mt-4 w-full block text-center text-sm text-[#0363CD] hover:text-red-light focus:text-red-light transition-200 select-none">
          Регистрация
        </router-link>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import {ref} from "#imports"

const inputType = ref('password')
const isVisible = ref(false)
const toggleIcon = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
  isVisible.value = !isVisible.value
}
</script>