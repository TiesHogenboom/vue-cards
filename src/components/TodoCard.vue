<template>

        <div class="card">
            <h1 class="title">{{ todocard.title }}</h1>
            <ul class="list">
                <li v-for="item in todocard.items" :key="item">{{ item }}</li>
            </ul>
        </div>
 
</template>

<script>
export default {
  props: {
    todocard: Object
  },
  computed: {
    todoitemClass() {
      return `todoitem-${this.todocard.todoitem}`;
    }
  }
}
</script>


<style scoped>


.card {
    width: 300px;
    height: 400px;
    background: white;
    border-radius: 10px;
    margin: 10px;
    border: 3px solid black;
}



.title {
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.list {
    margin: 20px;
    list-style: none;
}

li {
    border-top: 2px solid rgb(0, 0, 0);;
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 18px;
    font-weight: 400;
}
</style>