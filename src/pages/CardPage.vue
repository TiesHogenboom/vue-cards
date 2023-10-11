<template>
    <div class="page">
        <WebSidebar />
        <CardList />
    </div>
</template>
  
<script>

import WebSidebar from '../components/WebSidebar.vue'
import CardList from '../components/CardList.vue'

export default {
    components: {
        WebSidebar,
        CardList
    }
}

</script>
  
<style>
.page{
    display:flex;
}
</style>
  