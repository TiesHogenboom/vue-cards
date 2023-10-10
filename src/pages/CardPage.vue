<template>
    <div class="page">
        <WebNavbar />
        <CardList />
    </div>
</template>
  
<script>

import WebNavbar from '../components/WebNavbar.vue'
import CardList from '../components/CardList.vue'

export default {
    components: {
        WebNavbar,
        CardList
    }
}

</script>
  
<style>
.page{
    display:flex;
}
</style>
  