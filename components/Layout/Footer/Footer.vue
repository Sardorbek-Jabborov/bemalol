<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-y-5 gap-5 pt-9 pb-5 border-y border-[#eee] [&>*:nth-child(2)]:border-b [&>*:nth-child(2)]:md:border-0 [&>*:nth-child(2)]:pb-5 [&>*:nth-child(2)]:md:pb-0">
      <div class="col-span-6 md:col-span-3 pb-5 md:pb-0 border-b md:border-0 border-[#EEEEEE]">
        <router-link to="/">
          <img src="../../../public/bemalol-logo.svg" alt="adsf">
        </router-link>
        <div class="mt-8 flex flex-col lg:flex-row gap-2 lg:gap-0 px-2 sm:px-4 lg:px-0 w-fit lg:w-full">
          <button
              class="w-full lg:w-fit py-1 px-4 text-sm border border-[#ccc] bg-[#fff] text-[#333] hover:bg-[#eef5fc] hover:border-[#91c0f5] transition-300 relative hover:z-50">
            Лента RSS
          </button>
          <button
              class="w-full lg:w-fit py-1 px-4 text-sm border border-[#ccc] bg-[#fff] text-[#333] hover:bg-[#eef5fc] hover:border-[#91c0f5] transition-300 relative lg:-ml-[1px]">
            Карта сайта
          </button>
        </div>
      </div>
      <ul class="col-span-6 md:col-span-3" v-for="item in data" :key="item">
        <li class="uppercase text-sm">
          {{ item.title }}
        </li>
        <li v-for="list in item.list" :key="list" class="mt-1.5 md:mt-3 text-sm">
          <router-link :to="list?.link" class="hover:text-[#db3727] transition-300">{{ list?.text }}</router-link>
        </li>
      </ul>
    </div>
    <div class="md:pt-8 py-3 md:py-0 md:border-b border-[#eee] flex justify-between gap-10 md:mb-5">
      <div class="max-w-[220px] hidden md:block">
        <h3 class="text-[#202020] text-15 font-medium">Пользуйтесь сайтом с мобильного телефона</h3>
        <p class="mt-1.5 text-[#777] text-13">Удобный сайт, качественный поиск, быстрая подача объявлений.</p>
      </div>
      <img src="../../../assets/images/phone.png" alt="phone_img" class="hidden md:block">
      <p class="text-[#777] text-13">
        © 2023 bemalol.uz – доска бесплатных объявлений.
        Использование сайта, в том числе подача объявлений, означает согласие с Пользовательским соглашением.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const data = [
  {
    title: "ПЛАТНЫЕ УСЛУГИ",
    list: {
      first: {
        text: "Партнёрская программа",
        link: "/",
      },
      second: {
        text: "Реклама на сайте",
        link: "/",
      },
      third: {
        text: "Платные услуги",
        link: "/"
      },
      fourth: {
        text: "Контакты",
        link: "/"
      }
    },
  },
  {
    title: "ИНФОРМАЦИЯ",
    list: {
      first: {
        text: "Политика конфиденциальности",
        link: "/",
      },
      second: {
        text: "Правила сайта",
        link: "/",
      },
      third: {
        text: "Помощь",
        link: "/"
      },
      fourth: {
        text: "Статьи",
        link: "/"
      }
    },
  },
  {
    title: "ПОЛЬЗОВАТЕЛЮ",
    list: {
      first: {
        text: "Создать магазин",
        link: "/",
      },
      second: {
        text: "Личный кабинет",
        link: "/",
      },
      third: {
        text: "Регистрация",
        link: "/"
      },
      fourth: {
        text: "Установить приложение",
        link: "/"
      }
    },
  }
]
</script>