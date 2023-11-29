<template>
  <div class="relative w-full sm:w-[330px] md:w-[420px] pr-2">
    <input
        type="range"
        :step="step"
        :min="min"
        :max="max"
        :value="minValue"
        class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0"
    />
    <input
        type="range"
        :step="step"
        :min="min"
        :max="max"
        :value="maxValue"
        class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0"
    />
    <p class="mb-2 text-sm">Цена</p>
    <div class="relative z-10 h-2">
      <div class="absolute z-10 h-1.5 left-0 right-0 bottom-0 top-0 rounded-md bg-[#EEEEEE]"></div>
      <div class="absolute z-20 h-1.5 top-0 bottom-0 rounded-md bg-blue-main"
           :style="{ right: `${maxPos}%`, left: `${minPos}%` }"></div>
      <div
          class="absolute z-30 w-4 h-4 top-0 left-0 bg-blue-main active:bg-[#007fff] border border-transparent active:border-[#003eff] hover:bg-[#0280ad] hover:cursor-pointer shadow-[0_0_0_2px_#fff] rounded-full -mt-1.5 -ml-1 cursor-pointer"
          @mousedown="onLeftThumbMouseDown"
          @touchstart="onLeftThumbMouseDown"
          :style="{ left: `${minPos}%` }"
      ></div>
      <div
          class="absolute z-30 w-4 h-4 top-0 right-0 bg-blue-main active:bg-[#007fff] border border-transparent active:border-[#003eff] hover:bg-[#0280ad] hover:cursor-pointer shadow-[0_0_0_2px_#fff] rounded-full -mt-1.5 -mr-3 cursor-pointer"
          @mousedown="onRightThumbMouseDown"
          @touchstart="onRightThumbMouseDown"
          :style="{ right: `${maxPos}%` }"
      ></div>
    </div>
    <div class="block my-1 px-2.5">
      <div class="flex align-items-center justify-between">
        <input v-model="minValue"
               class="text-xs text-center w-[65px] outline-0 border border-[#ccc] rounded-[3px] py-0.5 px-px hover:border-[#91c0f5] focus:border-[#91c0f5]"
               type="number" :min="minValue" :max="maxValue"/>
        <input v-model="maxValue"
               class="text-xs text-center w-[65px] outline-0 border border-[#ccc] rounded-[3px] py-0.5 px-px hover:border-[#91c0f5] focus:border-[#91c0f5]"
               type="number" :min="minValue" :max="maxValue"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref, watch} from 'vue';

const props = defineProps({
  min: {default: 0},
  max: {default: 1000},
  step: {default: 1},
  modelValue: {type: Array, default: () => [0, 1000]},
});

const emit = defineEmits();

const minValue = ref(props.modelValue[0]);
const maxValue = ref(props.modelValue[1]);
const maxPos = ref(0);
const minPos = ref(0);
const startX = ref(null);
const barBox = ref(null);
const barValue = ref(0);
const thumbMargin = ref(null);

const updateModel = () => {
  emit('update:modelValue', [minValue.value, maxValue.value]);
};

const setMinPos = () => {
  minPos.value = ((minValue.value - props.min) / (props.max - props.min)) * 100;
};

const setMaxPos = () => {
  maxPos.value = 100 - ((maxValue.value - props.min) / (props.max - props.min)) * 100;
};

const triggerMouseDown = (data) => {
  const e = data.event;
  const mousemove = data.mousemove;
  const mouseup = data.mouseup;
  const value = data.value;

  e.preventDefault();
  startX.value = e.clientX;

  if (e.type === "touchstart") {
    if (e.touches.length === 1) {
      startX.value = e.touches[0].clientX;
    } else {
      return;
    }
  }

  barValue.value = value;
  barBox.value = e.target.parentNode.getBoundingClientRect();

  document.addEventListener("mousemove", mousemove);
  document.addEventListener("touchmove", mouseup);
  document.addEventListener("mouseup", mouseup);
  document.addEventListener("touchend", mouseup);
};

const onLeftThumbMouseDown = (e) => {
  triggerMouseDown({
    event: e,
    mousemove: onLeftThumbMousemove,
    mouseup: onLeftThumbMouseup,
    value: minValue.value,
  });
};

const onLeftThumbMousemove = (e) => {
  let clientX = e.clientX;
  if (e.type === "touchmove") {
    clientX = e.touches[0].clientX;
  }

  const distanceOrigin = clientX - startX.value;
  const per = distanceOrigin / barBox.value.width;
  let leftValue = barValue.value + (props.max - props.min) * per;
  let mod = leftValue % props.step;
  leftValue -= mod;

  if (leftValue < props.min) {
    leftValue = props.min;
  } else if (leftValue > maxValue.value - thumbMargin.value) {
    leftValue = maxValue.value - thumbMargin.value;
  }

  minValue.value = parseFloat(leftValue);
};

const onLeftThumbMouseup = () => {
  document.removeEventListener("mousemove", onLeftThumbMousemove);
  document.removeEventListener("mouseup", onLeftThumbMouseup);
  document.removeEventListener("touchmove", onLeftThumbMousemove);
  document.removeEventListener("touchend", onLeftThumbMouseup);
};

const onRightThumbMouseDown = (e) => {
  triggerMouseDown({
    event: e,
    mousemove: onRightThumbMousemove,
    mouseup: onRightThumbMouseup,
    value: maxValue.value,
  });
};

const onRightThumbMousemove = (e) => {
  let clientX = e.clientX;
  if (e.type === "touchmove") {
    clientX = e.touches[0].clientX;
  }
  const distanceOrigin = clientX - startX.value;
  const per = distanceOrigin / barBox.value.width;
  let rightValue = barValue.value + (props.max - props.min) * per;
  let mod = rightValue % props.step;
  rightValue -= mod;
  if (rightValue < minValue.value + thumbMargin.value) {
    rightValue = minValue.value + thumbMargin.value;
  } else if (rightValue > props.max) {
    rightValue = props.max;
  }
  maxValue.value = parseFloat(rightValue);
};

const onRightThumbMouseup = () => {
  document.removeEventListener("mousemove", onRightThumbMousemove);
  document.removeEventListener("mouseup", onRightThumbMouseup);
  document.removeEventListener("touchmove", onRightThumbMousemove);
  document.removeEventListener("touchend", onRightThumbMouseup);
};

watch(minValue, (newValue) => {
  setMinPos();
  emit('change:minValue', newValue);
  updateModel();
});

watch(maxValue, (newValue) => {
  setMaxPos();
  emit('change:maxValue', newValue);
  updateModel();
});
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>