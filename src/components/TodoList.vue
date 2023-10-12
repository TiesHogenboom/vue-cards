<!--  -->
<template>
    <div class="container">
        <TodoCard v-for="todocard in todocards" :key="todocard.title" :todocard="todocard"/> 
    </div>

</template>

<script>
import TodoCard from "./TodoCard.vue";
import axios from "axios";
export default {
    
    components: {
        TodoCard
    },
    data() {
        return {
            todocards: []
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
                console.log(response.data.todoCard);
                this.todocards = response.data.todoCard;
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    }
}

};
</script>


<style scoped>
.container {
    display: flex;
    flex: 1;
    padding: 50px;
    flex-wrap: wrap;
    min-height:100vh;
    padding-bottom: 70px;
}
</style>