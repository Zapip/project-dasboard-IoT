<template>
    <!-- Flow Arrow -->
    <TankIndicator id="TK-001" :content="{ title: 'TK-001' }" class="left-0 top-0" />
    <TankIndicator id="TK-002" :content="{ title: 'TK-002' }" class="right-0 top-16" />
    <PumpIndicator id="P-001" :content="{ title: 'P-001' }" class="-top-4 inset-x-60" />
    <PumpIndicator id="P-002" :content="{ title: 'P-002' }" class="top-28 inset-x-60" />
    <PumpIndicator id="P-003" :content="{ title: 'P-003' }" class="bottom-3 inset-x-60" />

    <div class="w-[3%] h-[80%] bg-water absolute bottom-8 left-12 rounded-l-xl">

    </div>
    <div class="w-[3%] h-[65%] bg-water absolute right-12 top-28 rounded-r-xl">

    </div>
    <div class="w-[3%] h-[70%] bg-water absolute inset-7 left-56 rounded-l-xl">

    </div>
    <div class="w-[3%] h-[70%] bg-water absolute inset-7 left-96 rounded-r-xl ">

    </div>
    <div class="w-[29%] h-[5%] bg-water absolute inset-12 rounded-l-xl">

    </div>
    <div class="w-[28%] h-[5%] bg-water absolute right-12 top-28 rounded-r-xl">

    </div>
    <div class="w-[83%] h-[5%] bg-water absolute bottom-8 left-12 rounded-b-xl">

    </div>
    <div class="w-[29%] h-[5%] bg-water absolute left-56 top-6 rounded-t-xl">

    </div>
    <div class="w-[29%] h-[5%] bg-water absolute left-56 rounded-tl-xl bottom-60">

    </div>
    <div class="w-[29%] h-[5%] bg-water absolute left-56 rounded-b-xl bottom-24">

    </div>





</template>
<script>
import TankIndicator from './indicators/TankIndicator.vue';
import PumpIndicator from './indicators/PumpIndicator.vue';

export default {
    name: 'Schema',
    components: {
        TankIndicator,
        PumpIndicator
    }

}
</script>