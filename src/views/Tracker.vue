<script setup lang="ts">
import Switcher from '../components/Switcher.vue'
import ImageTracker from '../components/ImageTracker.vue'
import Nutrition from '../components/Nutrition.vue'

</script>

<template>
    <div class="container bg-primary mx-auto flex flex-row justify-center space-x-10 h-[80vh] mt-10">
      <div class="card bg-neutral text-neutral-content w-[50vh]">
        <div class="card-body items-center text-center">
            <Switcher></Switcher>
            <ImageTracker></ImageTracker>
        </div>
      </div>
      <div class="card bg-neutral text-neutral-content w-[50vh] hidden md:block">
        <div class="card-body items-center text-center">
            <h1 class="text-xl mb-3">Progress</h1>
            <Nutrition name="Calorie"></Nutrition>
            <Nutrition name="Carbohydrate"></Nutrition>
            <Nutrition name="Sugar"></Nutrition>
            <Nutrition name="Fat"></Nutrition>
            <Nutrition name="Protein"></Nutrition>
        </div>
    </div>
    </div>
  </template>
  
  