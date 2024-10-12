<script setup lang="ts">
import { onMounted } from "vue";
import Sidebar from "./components//partials/Sidebar.vue";
import Navbar from "./components//partials/Navbar.vue";
import Chart from "./components/Chart.vue"
import pump from "./components/pump.vue";
import { type IStaticMethods } from "preline/preline";
import Schema from "./components/Schema.vue";

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
  <header class="bg-card w-full h-16 shadow border-b-4 border-main sticky z-10">
    <Navbar />
    <Sidebar />
  </header>
  <main class="p-12 py-6">
    <article class="w-full grid grid-cols-4 gap-6">
      <section class="bg-card w-full h-full col-span-2 rounded-xl p-4 drop-shadow-2xl grid gap-6">
        <h1 class="text-xl font-medium">Grafik Pembacaan Level Air</h1>
        <Chart />
      </section>
      <section class="bg-card w-[615px] col-span-2 rounded-xl p-4 drop-shadow-2xl relative">
        <Schema />
      </section>
      <section class="bg-card w-full border border-main col-span-3 rounded-xl p-6 drop-shadow-2xl">
        <h1 class="text-xl font-medium">Sistem Pengendali Pompa</h1>
        <article class="w-full rounded-xl py-4 grid grid-cols-3 gap-4">
          <pump id="pump-1" :content="{ title: 'P-001' }" />
          <pump id="pump-2" :content="{ title: 'P-002' }" />
          <pump id="pump-3" :content="{ title: 'P-003' }" />
        </article>
      </section>
      <section class="bg-card w-full border border-main col-span-1 rounded-xl p-6 drop-shadow-2xl">
        <h1 class="text-xl font-medium">Pompa Sirkulasi</h1>
        <article class="w-full rounded-xl py-4 grid grid-cols-1 gap-4">
          <pump id="pump-4" :content="{ title: 'P-004' }" />
        </article>

      </section>

    </article>
  </main>
</template>
