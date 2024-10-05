<template>
    <!-- Navigation Toggle -->
    <nav class="flex gap-4 items-center w-full h-full px-12">
        <button aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-example"
            aria-label="Toggle navigation" data-hs-overlay="#hs-offcanvas-example">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 10.5C9.17157 10.5 8.5 11.1716 8.5 12C8.5 12.8284 9.17157 13.5 10 13.5H38C38.8284 13.5 39.5 12.8284 39.5 12C39.5 11.1716 38.8284 10.5 38 10.5H10Z"
                    fill="#9487E8" />
                <path
                    d="M10 22.5C9.17157 22.5 8.5 23.1716 8.5 24C8.5 24.8284 9.17157 25.5 10 25.5H38C38.8284 25.5 39.5 24.8284 39.5 24C39.5 23.1716 38.8284 22.5 38 22.5H10Z"
                    fill="#9487E8" />
                <path
                    d="M10 34.5C9.17157 34.5 8.5 35.1716 8.5 36C8.5 36.8284 9.17157 37.5 10 37.5H38C38.8284 37.5 39.5 36.8284 39.5 36C39.5 35.1716 38.8284 34.5 38 34.5H10Z"
                    fill="#9487E8" />
            </svg>
        </button>

        <h1 class="text-xl font-medium truncate">
            Dashboard Sistem Monitoring Level Air dan Pengendalian Otomatisasi Pompa
            Air
        </h1>
    </nav>
    <!-- End Navigation Toggle -->
</template>

<script>
export default {
    name: "Navbar",
};
</script>
