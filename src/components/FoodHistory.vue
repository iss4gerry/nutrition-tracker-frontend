<script setup lang="ts">

const food = false

</script>

<template>
    <div class="min-h-[80vh] flex flex-col items-center max-sm:w-[40vh]">
      <div class="card-container" v-if="food">
        <div class="card-body m-2 md:mt-5 md:mb-5 bg-slate-50 rounded-2xl p-6 max-h-[130px] md:max-h-[140px]">
            <h2 class="card-title">Food Name</h2>
            <div class="flex justify-between items-start">
              <div class="text-start flex-grow">
                <p class="multiline-ellipsis">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam obcaecati, officiis perferendis eveniet fugit quas dolore doloremque hic voluptates Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto recusandae praesentium molestias quo velit adipisci neque? Quae maiores soluta qui illo voluptates saepe, maxime pariatur rem totam aliquid labore adipisci.
                </p>
              </div>
              <button class="btn btn-primary ml-4">Detail</button>
            </div>
          </div>
      </div>
      
      <p v-else class="flex items-center justify-center text-gray-500 h-[35vh]">You have no history yet</p>
      
      <div class="join mt-auto">
        <button class="join-item btn">«</button>
        <button class="join-item btn">Page 22</button>
        <button class="join-item btn">»</button>
      </div>
    </div>
  </template>
  
  

 <style scoped>
 .multiline-ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2; /* Batasi jumlah baris, misalnya 3 baris */
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>
 
  