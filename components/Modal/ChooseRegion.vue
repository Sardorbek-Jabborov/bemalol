<template>
  <div
      class="max-h-[550px] overflow-y-scroll w-[550px] py-6 mx-auto bg-[url('/assets/images/bg_region.png')] bg-cover p-4 absolute top-10 rounded-sm shadow-[0_3px_9px_rgba(0,0,0,.5)]">
    <p class="text-center text-lg">Выбор региона</p>
    <IconsClose
        class="absolute right-4 top-4 w-3 h-3 hover:cursor-pointer text-[#AAAAAA] hover:text-red-main transition-200"
        @click="close"/>
    <p class="mt-5 text-[#555] text-sm">Текщий регион: {{ regionStore?.currentRegion }}</p>
    <div class="mt-5 bg-white border-2 border-[#accdf6] p-1">
      <button class="text-black-main hover:bg-[#eef5fc] transition-200 text-sm p-1 w-full text-left" @click="openRegs">
        {{ regions.country }}
      </button>
      <div class="grid grid-cols-12 gap-x-4" v-if="regIsOpen">
        <div v-for="region in regions.regions" :key="region" class="col-span-6 hover:bg-[#eef5fc] hover:cursor-pointer"
             @click="setLocation(region.region)">
          <p class="p-1 text-sm">{{ region.region }}</p>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-3">
      <ButtonGrey @click="backStep">Назад</ButtonGrey>
      <ButtonGrey>Все регионы</ButtonGrey>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, watch} from "vue"

import {regions} from "~/data/regions";
import {useRegionStore} from "~/store/region";

const regionStore = useRegionStore()

const regIsOpen = ref(false)
const openedCity = ref('')

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

const openRegs = () => {
  regIsOpen.value = true
}

const setLocation = (city) => {
  console.log(city)
  regionStore.setRegion(city)
  regIsOpen.value = false
}

const backStep = () => {
  if (openedCity.value) {
    console.log(openedCity.value)
    openedCity.value = ''
    regIsOpen.value = true
  } else if (regIsOpen.value) {
    regIsOpen.value = false
  } else {
    emit('close')
  }
}

function close() {
  emit('close')
  regIsOpen.value = false
  document.body.style.overflow = 'auto'
}

const watchShow = () => {
  const body = document.body;

  if (body) {
    if (props.show) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }
};

const stopWatchingShow = watch(() => props.show, watchShow, {immediate: true});

onBeforeUnmount(() => {
  stopWatchingShow();
});
</script>