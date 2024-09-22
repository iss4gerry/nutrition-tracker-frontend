<script setup lang="ts">
import { ref } from 'vue';
import Switcher from '../components/Switcher.vue'
import ImageTracker from '../components/ImageTracker.vue'
import Nutrition from '../components/Nutrition.vue'
import History from '../components/History.vue';
import TextTracker from '../components/TextTracker.vue'
import FoodIdea from '../components/FoodIdea.vue'

const active = ref('image')

const getStatus = (activeTab: string) => {
  active.value = activeTab
}


</script>

<template>
    <div class="container mx-auto flex flex-col md:flex-row justify-center space-x-0 md:space-x-0 space-y-45 md:space-y-0 mt-10">
      <div class="card text-neutral-content w-full md:w-[50vh] -mt-3 md:mt-0">
        <div class="card-body items-center text-center">
          <Switcher @active="getStatus"></Switcher>
          <ImageTracker v-if="active === 'image'"></ImageTracker>
          <TextTracker v-if="active === 'text'"></TextTracker>
          <FoodIdea v-if="active === 'idea'"></FoodIdea>
        </div>
      </div>
      <div class="card text-neutral-content w-full md:w-[50vh] -mt-20">
        <div class="card-body items-center text-center">
          <h1 class="text-xl mb-3 h-7"></h1>
          <Nutrition name="Calorie"></Nutrition>
          <Nutrition name="Carbohydrate"></Nutrition>
          <Nutrition name="Sugar"></Nutrition>
          <Nutrition name="Fat"></Nutrition>
          <Nutrition name="Protein"></Nutrition>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col md:flex-row justify-center space-x-0 md:space-x-0 space-y-45 md:space-y-0 md:mt-20 -mt-10">
      <div class="card text-neutral-content w-full md:w-[105vh] -mt-3 md:mt-0">
        <div class="card-body items-center text-center">
          <History></History>
        </div>
      </div>
    </div>
  </template>
  
  
  
  