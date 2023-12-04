<template>
  <div
      class="max-h-[550px] w-[600px] bg-white absolute top-10 rounded-sm shadow-[0_5px_15px_rgba(0,0,0,.5)]">
    <div class="flex items-center justify-between p-4 border-b border-[#E5E5E5]">
      <p>
        Согласие на обработку персональных данных
      </p>
      <IconsClose
          class="w-3 h-3 hover:cursor-pointer text-[#AAAAAA] hover:text-red-main transition-200"
          @click="close"/>
    </div>
    <p class="p-4 text-sm">
      Предоставляя свои персональные данные пользователь даёт согласие на обработку, хранение и использование своих
      персональных данных.
    </p>
  </div>
</template>
<script setup lang="ts">
import {onBeforeUnmount, ref, watch} from "vue"


const regIsOpen = ref(false)

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

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