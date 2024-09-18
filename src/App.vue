<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Faq from './components/Faq.vue'

</script>

<template>
  <main>
    <div class="bg-secondary">
      <Navbar></Navbar>
      <div class="bg-gradient-to-t from-primary to-secondary min-h-screen flex-col -mt-11 md:mt-10">
      <router-view></router-view>
      </div>
      <div class="bg-primary min-h-screen">
        
  
      </div>
      <div class="bg-gradient-to-t from-secondary to-primary flex flex-col min-h-screen">
        <div class="container mx-auto flex-grow mt-20 flex flex-col justify-start">
          <h1 class="text-4xl ml-4 font-bold">Frequently Asked Questions</h1>
          <Faq></Faq>
        </div>
        <div class="divider"></div>
        <Footer></Footer>
      </div>
      
    </div>
  </main>
  
 

 
  
</template>

<style scoped>
</style>
