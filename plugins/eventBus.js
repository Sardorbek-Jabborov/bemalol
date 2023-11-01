import mitt from 'mitt';

export default defineNuxtPlugin((nuxtApp) => {
    const emitter = mitt();

    nuxtApp.provide('event', emitter.emit);
    nuxtApp.provide('listen', emitter.on);
});
// import Vue from "vue"
// import {onBeforeMount, ref} from 'vue'
//
//
// window.eventBus = new Vue()
// const aaa = ref("465")
//
// onBeforeMount(() => {
//     console.log(aaa)
// })