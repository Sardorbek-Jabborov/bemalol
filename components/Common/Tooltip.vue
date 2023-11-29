<template>
  <div
      class="absolute left-1/2 -translate-x-1/2 transition-200 bg-purple-light rounded-lg"
      :class="[
      show
        ? '!-translate-y-1/3 visible opacity-100 hidden'
        : 'translate-y-0 invisible opacity-0',
      {
        'group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1/3 bottom-full':
          !show,
        'group-hover:translate-y-10 !bottom-0': toBottom,
      },
    ]"
  >
    <div
        class="tooltip bg-green-darker text-center w-[120px] rounded-lg h-full px-3 py-2 text-sm leading-130 text-purple relative after:absolute after:left-1/2 after:-ml-1 after:border-[5px] after:border-transparent after:!border-t-green-darker before:absolute before:left-1/2 before:ml-[-5.5px] before:border-[6.5px] before:border-transparent before:!border-t-green-darker"
        :class="[tooltipStyles]"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  withTrigger?: boolean
  show?: boolean
  toBottom: boolean
  tooltipStyles?: string
}
defineProps<Props>()
</script>
