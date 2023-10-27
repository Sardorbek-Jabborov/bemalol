<template>
  <button
      class="py-1.5 px-4 rounded-3xl relative text-white text-sm border border-transparent transition-300 active:shadow-[inset_0_3px_5px_rgba(0,0,0,.125)]"
      :class="[btnStyle, {'uppercase': isUppercase, 'shadow-[0_6px_4px_-4px_rgba(0,0,0,0.3)]': shadow}]">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  isUppercase: {
    type: Boolean,
  },
  shadow: {
    type: Boolean,
  },
  variant: {
    type: String,
    validator: (value: string) => ['primary', 'secondary'].includes(value),
    default: 'primary',
  }
})

const btnStyle = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-green-main hover:bg-green-secondary border-[#55bb00]'
    case 'secondary':
      return 'bg-[#f8c55f] hover:bg-[#febc51] border-[#febc51]'
  }
})
</script>
