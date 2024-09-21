<script setup lang="ts">
const { name } = defineProps<{ name: string }>();

// Simulasi progress value dan total
const currentProgress = 1000;
const totalProgress = 5000;
</script>

<template>
  <div class="card text-neutral-content w-full bg-gray-50 rounded-lg shadow-inner py-[-30px]">
    <div class="card-body items-center text-center space-y-1">
         
      <div class="flex flex-col items-center space-x-15 -mt-5 -mb-3">
        <p class="text-sm w-22 -mb-4">{{ name }}</p>
          <div class="divider lg:divider-vertical"></div>
        <div class="flex flex-col items-center space-x-15 w-full -mt-3">
            <p class="text-sm text-accent">
                {{ currentProgress.toLocaleString() }} / {{ totalProgress.toLocaleString() }}
            </p>
            <progress class="progress progress-accent w-56 bg-primary">50</progress>
        </div>
      </div>
    </div>
  </div>
</template>
