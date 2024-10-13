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
        id: Number,
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
            statusPump: false,
        }
    },
    methods: {
        async tooglePump(id) {
            // Toggle lokal
            this.statusPump = !this.statusPump;

            // // kirim perubahan status tombol ke server
            // try {
            //     const response = await fetch(`https://670a77ddac6860a6c2c99956.mockapi.io/pump-indicator-status/pump-button/${id}`, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({ status: this.statusPump })
            //     });

            //     const result = await response.json();
            //     console.log(result.message); // Log success message from server
            // } catch (error) {
            //     console.error('Error updating pump status:', error);
            // }

            // Emit event to parent component if needed
            this.$emit('toogle-pump', id, this.statusPump);
            console.log(`Pump ${id} is ${this.statusPump ? 'ON' : 'OFF'}`);
        }
    }

};
</script>

<style>
@keyframes pumpScale {
    0% {
        transform: scaleY(1);
    }

    50% {
        transform: scaleY(0.8);
    }

    100% {
        transform: scaleY(1);
    }
}

.animate-pump {
    animation: pumpScale 2s ease-in-out infinite;
}
</style>