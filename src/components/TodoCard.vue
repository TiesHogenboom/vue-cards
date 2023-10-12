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
    border: 3px solid rgb(209, 209, 227);
    border-right: 5px solid rgb(191, 191, 214);
    border-top: 4px solid rgb(191, 191, 214);
    box-shadow: 5px -4px 1px 0 rgba(191, 191, 214);
    border-radius: 10px;
    margin: 10px;
    transition: 0.4s;
}

.card:hover{
    padding: 11px;
    border: 2px solid rgb(214, 214, 233);
    border-right: 4px solid rgb(199, 199, 222);
    border-top: 3px solid rgb(199, 199, 222);
    box-shadow: 4px -3px 1px 0 rgb(199, 199, 222);
}

.title {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    color: rgb(209, 209, 227);
}

.list {
    margin: 20px;
    list-style: none;
}

li {
    border-top: 2px solid rgb(209, 209, 227);;
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 18px;
    font-weight: 400;
}
</style>