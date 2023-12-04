<template>
  <div
      class="relative"
      data-dropdown="0"
      tabindex="0"
      @focusout="handleFocusOut"
  >
    <div :class="headClass" @click="toggleShow">
      <slot name="head"></slot>
    </div>
    <transition name="dropdown" mode="in-out">
      <div
          v-show="showBody"
          :class="[bodyClass]"
          data-dropdown-body
          class="absolute right-0 w-max min-w-full translate-y-full overflow-hidden -bottom-1 z-20 rounded-sm shadow-[0_0_7px_0_rgba(0,_0,_0,_0.1),_0_10px_20px_0_rgba(0,_0,_0,_0.25)] bg-white"
      >
        <slot name="body"/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  headClass?: any
  bodyClass?: any
  show?: boolean | undefined
  withTrigger?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: undefined,
  headClass: '',
  bodyClass: '',
})

interface Emits {
  (e: 'toggle', v: boolean): void
}

const emit = defineEmits<Emits>()

const showBody = ref(props.show ?? false)

function toggleShow() {
  if (!props.withTrigger) {
    if (props.show === undefined) {
      showBody.value = !showBody.value
    } else {
      emit('toggle', !props.show)
    }
  }
}

function handleFocusOut(e: FocusEvent) {
  console.log("here")
  if (e?.target?.dataset?.dropdown) {
    if (props.show === undefined) {
      showBody.value = false
    } else {
      emit('toggle', false)
    }
  }
}

watch(
    () => props.show,
    (v) => {
      showBody.value = v
    }
)
</script>

<style scoped>
@keyframes dropdown {
  0% {
    opacity: 0;
    bottom: -12px;
  }
  100% {
    opacity: 1;
    bottom: -4px;
  }
}

.dropdown-enter-active {
  animation: dropdown 0.3s ease-in-out;
}

.dropdown-leave-active {
  animation: dropdown 0.3s ease-in-out reverse;
}
</style>
