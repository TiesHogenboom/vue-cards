<template>
    <div class="page">
        <WebSidebar />
        <h1>This is the home page</h1>
    </div> 
</template>
  
<script>

import WebSidebar from '../components/WebSidebar.vue'

export default {
    components: {
        WebSidebar
    }
}

</script>
  
<style>
.page{
    display:flex;
}
</style>
  