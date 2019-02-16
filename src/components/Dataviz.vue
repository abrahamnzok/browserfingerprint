<template>
    <div id="charts" class="chartJsContainer">
        <h1>Dataviz</h1>
        <canvas id="dataviz" style="height:200px;width: 600px;"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js'
    import * as axios from "axios"
    import randomColor from 'randomcolor'

    export default {
        name: "Dataviz",
        data: () => {
            return {
                options: [],
                datasets: [],
            }
        },
        methods: {
            createBar (id, datasets, options) {
                const properties = {
                    type: 'bar',
                    data: datasets,
                    options: options,
                };
                const ctx = document.getElementById(id).getContext('2d');
                new Chart(ctx, properties);
            },

            getLabels(results) {
                return results.map(o => o.name);
            },

            getVisits (results) {
                return results.map(o => o.visits);
            },

            getCollisions (results) {
                return results.map(o => o.collisions);
            },

            getColors (results) {
                return randomColor({
                    count: results.length,
                })
            },

            getDatasets (results) {
                return {
                    labels: this.getLabels(results),
                    datasets: [
                        {
                            label: 'Number of collisions',
                            backgroundColor: this.getColors(results),
                            data: this.getCollisions(results),
                            borderWidth: 2,
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            borderColor: '#FFEC8B',
                            pointBorderWidth: 0,
                            pointHoverRadius: 0,
                        },
                        {
                            label: 'Number of visits',
                            backgroundColor: this.getColors(results),
                            data: this.getVisits(results),
                            borderWidth: 2,
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            borderColor: '#FFEC8B',
                            pointBorderWidth: 0,
                            pointHoverRadius: 0,
                        },
                    ]
                }
            },

            getOptions () {
                return {
                    responsive: true,
                    scales: {
                        xAxes: [{
                            maxBarThickness: 30,
                            ticks: {
                                maxRotation: 90,
                                minRotation: 80
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            },

        },
        async created() {
            try {
                const results = await axios({
                    method: 'get',
                    url: 'http://localhost:3300/viz'
                });
                this.datasets = this.getDatasets(results.data);
                this.options = this.getOptions();
                this.createBar('dataviz', this.datasets, this.options);
            } catch (e) {
                console.log(e.stack);
            }
        },
    }
</script>

<style scoped>
</style>
