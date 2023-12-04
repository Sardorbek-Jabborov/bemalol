<template>
  <section class="bg-grey-300 py-3">
    <div class="container bg-white p-3">
      <form class="w-[338px] mx-auto pt-12 pb-10">
        <h1 class="bg-[#70A3DB] rounded-[3px] text-xl text-white text-center py-0.5">Регистрация</h1>
        <CommonInput placeholder="Ваше имя" inputType="text"/>
        <CommonInput placeholder="Ваш e-mail" inputType="email"/>
        <CommonInput placeholder="Пароль" toggleIcon v-model="password1" inputType="password"/>
        <CommonInput placeholder="Повторите пароль" v-model="password2" toggleIcon inputType="password"/>
        <div class="flex items-center">
          <CommonCheckbox label="Согласие на" class="text-sm w-fit"/>
          <div
              class="text-blue-main hover:text-red-light hover:cursor-pointer transition-200 inline text-sm h-full pt-2.5 pl-1"
              @click="showModal">
            обработку персональных данных
          </div>
        </div>
        <ButtonSecondary label="Сохранить" variant="blue" class="block min-w-[170px] mt-4 mx-auto"/>
        <p class="text-center mt-8 text-13 text-[#777777] hover:cursor-default">или войти через соцсеть</p>
        <ul class="flex justify-center mt-2 gap-3 pb-6">
          <li class="hover:opacity-70 transition-200">
            <router-link to="youtube.com">
              <IconsYoutube/>
            </router-link>
          </li>
          <li class="hover:opacity-70 transition-200">
            <router-link to="/">
              <IconsGoogle/>
            </router-link>
          </li>
          <li class="hover:opacity-70 transition-200">
            <router-link to="/">
              <IconsVk/>
            </router-link>
          </li>
          <li class="hover:opacity-70 transition-200">
            <router-link to="/">
              <IconsOk/>
            </router-link>
          </li>
          <li class="hover:opacity-70 transition-200">
            <router-link to="/">
              <IconsFacebook/>
            </router-link>
          </li>
        </ul>
      </form>
    </div>
    <Transition name="slide-fade">
      <div class="fixed top-0 left-0 w-full h-full z-50 bg-[#2d2d2d8f] hidden opacity-0"
           :class="{ '!flex justify-center opacity-100 overflow-hidden ': isOpen }"
           @click="onClickOutside"
           v-if="isOpen"
      >
        <ModalPesonalData :show="isOpen" v-if="isOpen" @close="showModal"
                          class="transition-200 modal-content mx-auto bg-[#fff]"/>
      </div>
    </Transition>
  </section>
</template>
<script setup lang="ts">
import {ref} from "#imports"

const isOpen = ref(false)
const password1 = ref('')
const password2 = ref('')

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