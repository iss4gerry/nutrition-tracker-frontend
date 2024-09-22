<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-xl shadow-inner max-w-md">
    <p class="text-lg font-semibold text-gray-700">Upload Your Food Image</p>
    <input
      type="file"
      class="file-input file-input-bordered file-input-primary w-full max-w-xs rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <p class="text-sm text-gray-500">Supported formats: JPG, PNG</p>
    <p class="text-lg font-semibold text-gray-700">Preview</p>
    <div class="w-full h-[35vh] bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <img alt="Image Preview" class="w-full h-full object-cover" />
      </div>
      <button class="btn btn-wide bg-primary">Analyze</button>      
  </div>
</template>