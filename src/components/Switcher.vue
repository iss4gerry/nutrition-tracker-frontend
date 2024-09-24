<script setup lang="ts">
import { ref } from "vue";

const activeTab = ref<string>("image");
const emit = defineEmits(["active"]);

function setActiveTab(tab: string) {
  activeTab.value = tab;
  emit("active", activeTab.value);
}
</script>

<template>
  <div role="tablist" class="tabs tabs-boxed bg-gray-50 shadow-inner">
    <a
      role="tab"
      class="tab"
      :class="{ 'tab-active': activeTab === 'text' }"
      @click="setActiveTab('text')"
      >Text</a
    >
    <a
      role="tab"
      class="tab"
      :class="{ 'tab-active': activeTab === 'image' }"
      @click="setActiveTab('image')"
      >Image</a
    >
    <a
      role="tab"
      class="tab"
      :class="{ 'tab-active': activeTab === 'idea' }"
      @click="setActiveTab('idea')"
      >Idea</a
    >
  </div>
</template>
