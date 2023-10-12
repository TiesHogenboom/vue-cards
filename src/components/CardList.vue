<template>
    <div class="card-list">
        <InfoCard v-for="infocard in infocards" :key="infocard.title" :infocard="infocard" />
    </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
import axios from "axios";

export default {
    components: {
        InfoCard
    },
    data() {
        return {
            infocards: []
        };
    },
    mounted() {
        this.loadJSONData();
    },
    methods: {
        loadJSONData() {
            axios
                .get('/data.json')
                .then(response => {
                    this.infocards = response.data.infoCard;
                })
                .catch(error => {
                    console.error('Error loading JSON data:', error);
                });
        }
    }
};
</script>

<style scoped>
.card-list {
    display: flex;
    width: 80vw;
    height: 100vh;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}
</style>
