<template>
    <div id="charts" class="chartJsContainer">
        <h1>Dataviz</h1>
        <canvas id="dataviz" style="height:200px;width: 600px;"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js';
    import {getDatasets, getOptions} from '../server/utils/dataviz';
    import * as axios from "axios";

    export default {
        name: "Dataviz",
        data: () => {
            return {
                options: [],
                datasets: [],
            }
        },
        methods: {
            createBar: (id, datasets, options) => {
                const properties = {
                    type: 'bar',
                    data: datasets,
                    options: options,
                };
                const ctx = document.getElementById(id).getContext('2d');
                new Chart(ctx, properties);
            },
        },
        async created() {
            try {
                const results = await axios({
                    method: 'get',
                    url: 'http://localhost:3300/viz'
                });
                this.datasets = getDatasets(results.data);
                this.options = getOptions();
                this.createBar('dataviz', this.datasets, this.options);
            } catch (e) {
                console.log(e.stack);
            }
        },
    }
</script>

<style scoped>
</style>
