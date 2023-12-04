<template>
  <div>
    <div class="p-3 my-3 bg-white w-full">
      <ButtonGrey class="md:hidden block !w-full">
        Все параметры
      </ButtonGrey>
      <div>
        <div class="flex flex-col sm:flex-row items-center justify-between lg:justify-start lg:gap-40">
          <CommonRange :class="[anyValue ? 'opacity-30 pointer-events-none' : '']"/>
          <div class="flex items-center justify-between sm:justify-start w-full sm:w-fit sm:gap-10 my-3 sm:my-0">
            <CommonCurrencyChanger :class="[anyValue ? 'opacity-30 pointer-events-none' : '']"/>
            <CommonCheckbox label="Любое значение" @checked="toggleAnyValue"/>
          </div>
        </div>
        <div class="flex flex-col min-[500px]:flex-row gap-2 justify-end">
          <ButtonSecondary label="Объявления на карте" variant="blue" class=""/>
          <ButtonSecondary label="Показать" variant="green" class=""/>
        </div>
      </div>
    </div>
    <div class="px-3 py-4 bg-white">
      <div
          class="flex max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-2 flex-row justify-between items-center">
        <div class="w-fit">
          <button v-for="(item, idx) in btnData" :key="idx"
                  @click="toggleTab(item)"
                  class="py-1 sm:py-1.5 px-1.5 sm:px-3 text-13 sm:text-sm transition-200 first:rounded-l-[3px] last:rounded-r-[3px] border border-[#ccc] hover:border-[#91c0f5] -ml-[1px] first:ml-0 relative hover:z-50 active:shadow-[inset_0_3px_5px_rgba(0,0,0,.125)]"
                  :class="[item.isActive ? 'text-[#7A7A7A] hover:cursor-default bg-[#F1F1F1] hover:bg-[#F1F1F1] hover:border-[#ccc] active:shadow-none' : 'bg-white hover:bg-[#eef5fc]']"
                  :disabled="item.isActive"
          >
            {{ item.text }}
            <span class="text-13 text-[#777777]" :class="{'!text-[#A6A6A6]': item.isActive}">({{ item.count }})</span>
          </button>
        </div>
        <CommonSelect/>
      </div>
      <SectionNoData class="mt-5"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {reactive, ref} from "#imports"

const anyValue = ref(false)
const btnData = reactive([
  {
    text: "Все",
    count: 3,
    isActive: true,
  },
  {
    text: "От магазинов",
    count: 2,
    isActive: false,
  },
  {
    text: "Частные",
    count: 1,
    isActive: false,
  }
])

const toggleTab = (clickedItem) => {
  btnData.forEach((item) => {
    item.isActive = item.text === clickedItem.text;
  });
}

const toggleAnyValue = () => {
  anyValue.value = !anyValue.value
}
</script>
