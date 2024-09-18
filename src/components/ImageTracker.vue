<script setup lang="ts">
import { ref } from 'vue'

const selectedImage = ref<string | null>(null)

// Fungsi untuk menangani input file
const handleFileInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    selectedImage.value = URL.createObjectURL(file)
  } else {
    selectedImage.value = null
  }
}
</script>

<template>
  <div class="container mx-auto flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-xl shadow-lg max-w-md">
    <p class="text-lg font-semibold text-gray-700">Upload Your Food Image</p>
    <input
      type="file"
      class="file-input file-input-bordered file-input-primary w-full max-w-xs rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
      @change="handleFileInput"
    />
    <p class="text-sm text-gray-500">Supported formats: JPG, PNG</p>
    <p class="text-lg font-semibold text-gray-700">Preview</p>
    <div v-if="selectedImage" class="w-full h-[35vh] bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <img :src="selectedImage" alt="Image Preview" class="w-full h-full object-cover" />
      </div>
      <p v-else class="flex items-center justify-center text-gray-500 h-[35vh]">No image selected</p>
      <button class="btn btn-wide bg-primary text-gray-50">Analyze</button>      
  </div>
</template>
