<script setup lang="ts">
import FoodHistory from './FoodHistory.vue';

</script>

<template>
    <div class="container mx-auto flex flex-col p-8 items-center rounded-xl mt-20 w-[vh200] ">
      <p class="text-2xl font-bold text-pretty -mb-2 -mt-4 text-gray-50">History</p>
      <div class="divider -mb-1"></div>
      <div class="card flex flex-col">
        <FoodHistory></FoodHistory>
      </div>
    </div>
  </template>
  