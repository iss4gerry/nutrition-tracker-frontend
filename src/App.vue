<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

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
      <div class="bg-gradient-to-t from-secondary to-primary min-h-screen">
        
  
      </div>
      <Footer></Footer>
    </div>
  </main>
  
 

 
  
</template>

<style scoped>
</style>
