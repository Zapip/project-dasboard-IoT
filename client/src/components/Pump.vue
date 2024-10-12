<template>
    <section class="bg-card w-full h-fit border border-t-main rounded-xl p-6 drop-shadow-xl" :id="id">
        <h1 class="text-xl font-medium">{{ content.title }}</h1>
        <section class="flex w-full justify-between">
            <img class="bg-cover" :class="{ 'animate-pump': statusPump }" src="/src/assets/img/Pump.png" alt="Pompa">
            <section class="flex flex-col justify-end items-center">
                <button @click="tooglePump(id)"
                    class=" text-white p-1 rounded-lg w-full flex gap-2 transition-all duration-300 ease-in-out"
                    :class="{ 'bg-ongreen flex-row-reverse': statusPump, 'bg-secondary': !statusPump }">
                    <div class="bg-white size-6 rounded-md p-1"></div>
                    <p>{{ statusPump ? 'ON' : 'OFF' }}</p>
                </button>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: "Pump",
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
    data() {
        return {
            statusPump: false
        }
    },
    methods: {
        tooglePump(id) {
            // Change the status of the pump use boolean
            this.statusPump = !this.statusPump;
            this.$emit('toogle-pump', id, this.statusPump);
            console.log(id, this.statusPump);
        },
    }

};
</script>

<style>
@keyframes pumpScale {
    0% {
        transform: scaleY(1);
    }

    50% {
        transform: scaleY(0.9);
    }

    100% {
        transform: scaleY(1);
    }
}

.animate-pump {
    animation: pumpScale 2s ease-in-out infinite;
}
</style>