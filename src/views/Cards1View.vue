<template>
    <div class="page">
        <CardList />
    </div>
</template>
  
<script>

import CardList from '../components/CardList.vue'

export default {
    components: {
        CardList
    }
}

</script>
  
<style>
.page{
    display:flex;
}
</style>
  