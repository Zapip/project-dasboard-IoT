<template>
    <section class="bg-card w-fit h-fit border rounded-xl p-4 drop-shadow-xl absolute z-50 scale-75" :id="id" :class="{
        'bg-ongreen text-white': pumpStatus === 'on',
        'bg-offred text-white': pumpStatus === 'broken',
        'bg-neutral text-black': pumpStatus === 'off'
    }">
        <h1 class="text-xl font-medium">{{ content.title }}</h1>
        <section class="flex w-full justify-between">
            <img class="bg-cover" :class="{ 'animate-pump': pumpStatus === 'on' }" src="/src/assets/img/Pump.png"
                alt="Pompa">
        </section>
    </section>
</template>

<script>
export default {
    name: 'PumpIndicator',
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
            pumpStatus: 'off', // Default status
            apiUrl: 'https://670a77ddac6860a6c2c99956.mockapi.io/pump-indicator-status/pumpstatus', // Ganti dengan API
        }
    },
    mounted() {
        // Memanggil API saat komponen di-mount
        this.fetchPumpStatus();
        // Memanggil API setiap 1 detik
        setInterval(this.fetchPumpStatus, 15000);
    },
    methods: {
        // Method untuk memanggil API dan mengambil status pompa
        async fetchPumpStatus() {
            try {
                const response = await fetch(`${this.apiUrl}/${this.id}`);
                const data = await response.json();

                // Mengupdate status pompa berdasarkan response dari API
                if (data.status === 'on') {
                    this.pumpStatus = 'on'; // Pompa hidup
                } else if (data.status === 'broken') {
                    this.pumpStatus = 'broken'; // Pompa rusak
                } else {
                    this.pumpStatus = 'off'; // Pompa mati
                }
            } catch (error) {
                console.error("Error fetching pump status:", error);
            }
        }
    }
}
</script>
