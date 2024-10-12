<template>
    <section class="bg-card w-fit h-fit border rounded-xl p-4 drop-shadow-xl absolute z-50 scale-75" :id="id">
        <h1 class="text-xl font-medium">{{ content.title }}</h1>
        <section class="flex w-full justify-between">
            <img class="bg-cover" :class="{ 'animate-pump': statusPump }" src="/src/assets/img/Pump.png" alt="Pompa">
        </section>
    </section>
</template>
<script>
export default {
    name: 'PumpIndicator',
    props: {
        id: String,
        content: {
            type: Object,
            required: true,
            properties: {
                title: String,
            }
        }
    },

}
</script>
