<template>
  <div class="min-w-[160px]">
    <CommonDropdown>
      <ul class="flex flex-col items-center py-3.5 px-3">
        <li class="w-full">
          <router-link to="/login">
            <ButtonSecondary label="Войти" variant="blue" class="w-full"/>
          </router-link>
        </li>
        <li class="w-full text-center text-sm pt-2">
          <router-link to="/register">
            Регистрация
          </router-link>
        </li>
      </ul>
    </CommonDropdown>
  </div>
</template>
<script setup lang="ts">
</script>