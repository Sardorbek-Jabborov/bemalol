<template>
  <div
      class="flex items-center justify-between mt-4 bg-white px-3 py-1.5 text-sm border border-[#ccc] focus-within:border-[#67a1e3] focus-within:shadow-[0_0_0px_3px_#e7edf5] transition-200 select-none"
      :class="rounded ? 'rounded-[20px]' : 'rounded-[3px]'">
    <input :type="props.inputType" ref="input" class="w-full outline-0 placeholder-[#777777]" :placeholder="placeholder" v-model="inputValue" @input="value">
    <div @click="toggleIcon" class="hover:cursor-pointer" v-if="props.toggleIcon">
      <IconsEyeClosed v-show="!isVisible"/>
      <IconsEye v-show="isVisible"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "#imports"

const inputValue = ref('')
const emit = defineEmits(['typed'])

const value = () => {
  emit("typed", inputValue.value)
}

const props = defineProps({
  toggleIcon: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  placeholder: String,
  inputType: {
    type: String,
    default: 'text'
  }
})

const input = ref()
const isVisible = ref(false)
const toggleIcon = () => {
  input.value.type = input.value.type === 'password' ? 'text' : 'password'
  isVisible.value = !isVisible.value
}
</script>