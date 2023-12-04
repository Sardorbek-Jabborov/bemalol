<template>
  <div class="w-[240px] z-50">
    <CommonDropdown>
      <ul class="max-h-[336px] py-1.5 overflow-y-auto overflow-x-visible">
        <li v-for="category in categories" :key="category" class="group relative">
          <router-link :to="category.url" class="flex gap-3 items-center py-2 hover:bg-gray-200 px-2">
            <component :is="category.icon" class="w-7 h-7"/>
            <p class="text-15">{{ category.title }}</p>
          </router-link>
          <!--          <div class="relative overflow-y-scroll">-->
          <!--            <CommonDropdown class="hidden group-hover:block absolute top-full right-2 z-50 overflow-visible">-->
          <!--              <li v-for="subcategory in category?.subcategories" :key="subcategory">-->
          <!--                <router-link to="/" class="flex gap-3 items-center py-2 hover:bg-gray-200 px-2">-->
          <!--                  <p class="text-15">{{ subcategory?.title }}</p>-->
          <!--                  <p>{{ subcategory?.count }}</p>-->
          <!--                </router-link>-->
          <!--              </li>-->
          <!--            </CommonDropdown>-->
          <!--          </div>-->
        </li>
      </ul>
    </CommonDropdown>
  </div>
</template>

<script setup lang="ts">
import {categories} from "~/data/categories";

</script>
<style scoped>
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #347ED1 #e2e2e2;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: #e2e2e2;
}

*::-webkit-scrollbar-thumb {
  background-color: #347ED1;
  border-radius: 4px;
}
</style>