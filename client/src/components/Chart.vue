<template>
    <article class="h-fit w-full flex flex-col">
        <div class="w-full h-fit flex items-center">
            <p class="h-fit transform rotate-180 text-xs" style="writing-mode: vertical-rl;">
                {{ yaxisCaption }}</p>
            <div class="flex-1" id="water-level-chart"></div>
        </div>
        <p class="text-center text-xs text-black">{{ xaxisCaption }}</p>
    </article>
</template>

<script>
window.addEventListener('load', () => {
    const chartElement = document.querySelector("#water-level-chart");
    let currentSecond = 15; // Mulai dari detik 15
    const intervalSeconds = 15; // Update setiap 15 detik
    const maxVisiblePoints = 6; // Selalu tampilkan 6 series pada x-axis
    let chart;

    function initializeChart() {
        chart = new ApexCharts(chartElement, {
            chart: {
                height: 300,
                type: 'area',
                toolbar: {
                    show: false
                },
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000 // 1 second animation for real-time effect
                    }
                },
                zoom: {
                    enabled: false
                },
            },
            series: [
                {
                    name: 'Level',
                    data: Array.from({ length: maxVisiblePoints }, () => 0), // Initialize with 6 zeros
                }
            ],
            xaxis: {
                type: 'category',
                tickPlacement: 'on',
                categories: Array.from({ length: maxVisiblePoints }, (_, i) => i < 5 ? '' : (i - 4) * intervalSeconds), // Labels 15, 30, 45, ...
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: '#9ca3af',
                },
                labels: {
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Fredoka, ui-sans-serif',
                        fontWeight: 400
                    }
                }
            },
            yaxis: {
                max: 70,
                labels: {
                    align: 'left',
                    style: {
                        colors: '#9ca3af',
                        fontSize: '13px',
                        fontFamily: 'Fredoka, ui-sans-serif',
                        fontWeight: 400
                    },
                    formatter: (value) => value
                },
            },
            stroke: {
                curve: 'smooth',
                width: 4,
                colors: ['#9487E8']
            },
            grid: {
                strokeDashArray: 2
            },
            fill: {
                type: 'gradient',
                colors: ['#9487E8'],
            },
            tooltip: {
                x: {
                    format: 'ss',
                }
            }
        });

        chart.render();
    }
    async function fetchNewDataPoint() {
        try {
            const response = await fetch('URL_API_BACKEND'); // Ganti dengan URL API backend
            const data = await response.json();
            return data.newDataPoint;
        } catch (error) {
            console.error('Error fetching new data point:', error);
        } finally {
            return Math.floor(Math.random() * 70); // Mengembalikan nilai random 1-70 ketika gagal fetch
        }
    }

    function updateChartData() {
        setInterval(async () => {
            // Membuat angka random 0-70 untuk data baru
            const newDataPoint = await fetchNewDataPoint();

            // Ambil data series dan x-axis
            const seriesData = chart.w.config.series[0].data;
            let categories = chart.w.config.xaxis.categories;

            // Tambahkan data baru
            seriesData.push(newDataPoint);

            // Jika sudah lebih dari 6 data point, hapus yang lama
            if (seriesData.length > maxVisiblePoints) {
                seriesData.shift();
            }

            // Update kategori x-axis
            categories = Array.from({ length: maxVisiblePoints }, (_, i) => {
                // Untuk index 0-4, gunakan nilai kosong pada siklus pertama
                if (i < 5 && currentSecond === 15) {
                    return '';
                }
                else {
                    if (currentSecond === 30) {
                        if (i >= 0 && i <= 3) {
                            return '';
                        }
                    }
                    if (currentSecond === 45) {
                        if (i >= 0 && i <= 2) {
                            return '';
                        }
                    }
                    if (currentSecond === 60) {
                        if (i >= 0 && i <= 1) {
                            return '';
                        }
                    }
                    if (currentSecond === 75 && i === 0) {
                        return '';
                    }
                    return currentSecond + (i - 5) * intervalSeconds;
                }
            });

            // Update chart options untuk x-axis dan data
            chart.updateOptions({
                xaxis: {
                    categories: categories.map(cat => cat === '' ? '' : `${cat}`) // Update the categories, tampilkan dengan satuan detik
                }
            });

            chart.updateSeries([{
                data: seriesData // Update the series with new data
            }]);

            // Tambah current second dengan kelipatan 15
            currentSecond += intervalSeconds;

        }, intervalSeconds * 1000); // Update setiap 15 detik (15,000 ms)
    }



    initializeChart(); // Initialize the chart
    updateChartData(); // Start updating the chart with real-time data
});





export default {
    name: "Chart",
    data() {
        return {
            xaxisCaption: "Waktu (Second)",
            yaxisCaption: "Level (Centimeter)"
        }
    }

};
</script>