<template>
    <div class="card-list">
        <InfoCard v-for="infocard in infocards" :key="infocard.title" :infocard="infocard" />
    </div>
</template>

<script>
import InfoCard from "./InfoCard.vue"

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
            const JSONData = require('../../public/data.json');
            this.infocards = JSONData;
        }
    }
};

</script>


<style>
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