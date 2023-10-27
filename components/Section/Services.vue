<template>
  <div class="container mt-6 md:mt-11 pb-6 md:pb-[100px]">
    <div
        class="bg-white bg-[length:200px] md:bg-[length:557px] bg-no-repeat bg-pos bg-[url('../../assets/images/bg1.svg'),_url('../../assets/images/bg2.png')] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <div class="pt-3 md:pt-4 pb-4 md:pb-9 px-4 md:px-8 border-b border-[#eee]">
        <h3 class="uppercase text-lg md:text-22 border-b-[2px] border-dashed border-[#ffdc61] w-fit">УСЛУГИ САЙТА</h3>
        <p class="mt-4 md:mt-10 mb-4 md:mb-8 text-lg md:text-xl font-light max-w-[610px]">
          Нужно только решить, насколько заметным вы хотите сделать объявление и как быстро желаете заключить сделку!
        </p>
        <p class="text-[#202020] max-w-[350px]">
          Наши услуги помогут быстрее продать ваш товар или услугу
        </p>
        <div class="mt-4 flex gap-2 items-center">
          <p class="text-base md:text-xl font-light">Как работают </p>
          <ButtonVButton label="Платные услуги" isUppercase shadow variant="secondary" class="text-xs md:text-base"/>
        </div>
      </div>
      <div class="px-4 md:px-8 pt-4 md:pt-9 pb-4 md:pb-11">
        <div class="grid grid-cols-12 gap-4">
          <CardServices v-for="item in data" :item="item" :key="item" class="col-span-12 md:col-span-6 lg:col-span-3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IconsMark, IconsNew, IconsTop, IconsVIP} from "#components";

const data = [
  {
    component: IconsTop,
    title: "Топ-объявление",
    text: "Объявление поднимется на верхние позиции, как если бы вы разместили его мгновение назад."
  },
  {
    component: IconsMark,
    title: "Выделить цветом",
    text: "Предложение становится более заметным среди других объявлений."
  },
  {
    component: IconsVIP,
    title: "Vip-объявление",
    text: "Объявление отображается в блоке справа на всех страницах сайта."
  },
  {
    component: IconsNew,
    title: "Магазин",
    text: "Развивайте свой бизнес. Подробная информация о компании — повысит доверие к вашему бизнесу со стороны клиентов."
  },
]
</script>

<style scoped>
.bg-pos {
  background-position: right 0px, 0 0;
}
</style>