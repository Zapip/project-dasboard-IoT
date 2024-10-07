<script setup lang="ts">
import { onMounted } from "vue";
import Sidebar from "./components//partials/Sidebar.vue";
import Navbar from "./components//partials/Navbar.vue";
import Chart from "./components/Chart.vue";

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

<template>
  <header class="bg-card w-full h-16 shadow border-b-4 border-main">
    <Navbar />
    <!-- <Navbar /> -->
    <Sidebar />
    <!-- <Sidebar /> -->
  </header>
  <main class="p-12 py-6">
    <article class="w-full grid grid-cols-4 gap-6">
      <section class="bg-card w-full h-full col-span-2 rounded-xl p-4 drop-shadow-2xl grid gap-6">
        <h1 class="text-xl font-medium">Grafik Pembacaan Level Air</h1>
        <Chart />
      </section>
      <section class="bg-card w-full col-span-2 rounded-xl p-4 drop-shadow-2xl">

      </section>
      <section class="bg-card w-full border border-main col-span-3 rounded-xl p-6 drop-shadow-2xl">
        <h1 class="text-xl font-medium">Sistem Pengendali Pompa</h1>
        <article class="w-full rounded-xl py-4 grid grid-cols-4 gap-4">
          <section class="bg-card w-full h-40 border border-t-main rounded-xl p-4 drop-shadow-xl"></section>
          <section class="bg-card w-full h-40 border border-t-main rounded-xl p-4 drop-shadow-xl"></section>
          <section class="bg-card w-full h-40 border border-t-main rounded-xl p-4 drop-shadow-xl"></section>
          <section class="bg-card w-full h-40 border border-t-main rounded-xl p-4 drop-shadow-xl"></section>
        </article>
      </section>
      <section class="bg-card w-full border border-main col-span-1 rounded-xl p-6 drop-shadow-2xl">
        <h1 class="text-xl font-medium">Pompa Sirkulasi</h1>
        <article class="w-full rounded-xl py-4 grid grid-cols-1 gap-4">
          <section class="bg-card w-full h-40 border border-t-main rounded-xl p-4 drop-shadow-xl"></section>
        </article>

      </section>

    </article>
  </main>
</template>
