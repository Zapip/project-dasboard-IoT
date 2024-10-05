<template>
  <header class="bg-card w-full h-16 shadow border-b-4 border-main">
    <Navbar />
    <!-- <Sidebar /> -->
  </header>
  <main>
    <Sidebar />
    <div class="flex">
      <!-- Sidebar -->

      <!-- Main content -->
      <div class="flex-1 p-4">
        <h1 class="text-3xl font-bold">Main Content</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";

import { type IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit();
  }, 100);
});
</script>
