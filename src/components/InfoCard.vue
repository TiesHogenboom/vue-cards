<template>
  <div class="info-card">
    <div class="info-card-content">
      <span :class="['cardtag', cardtagClass]"> {{ infocard.cardtag }}</span>
      <h2 class="card-title">{{ infocard.title }}</h2>
      <p class="text">{{ infocard.text }}</p>
      <div class="tags">
        <span v-for="tag in infocard.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infocard: Object
  },
  computed: {
    cardtagClass() {
      return `cardtag-${this.infocard.cardtag}`;
    }
  }
}

</script>

<style scoped>
.info-card {
  border: solid 3px rgb(48, 48, 56);
  border-radius: 10px;
  width: 330px;
  height: 330px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  transition: 0.2s;
  
}

.info-card:hover {
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.8);
}

.info-card:hover ~ .info-card {
  box-shadow: inset -8px 8px 0px rgba(205, 205, 205, 0.8);
  background:rgba(241, 241, 241, 0.8);
}
.info-card:hover .card-title {
  text-decoration: underline;
}

.info-card-content {
  margin: 20px;
}


.cardtag{
  display: flex;
  padding: 6px;
  width:fit-content;
  border-radius: 14px;
  padding-right: 9px;
  padding-left: 9px;
}
.cardtag-Easy {
  background-color: rgb(185, 252, 185);
  color: rgb(120, 163, 120);
}

.cardtag-Intermediate {
  background-color: rgb(195, 221, 243);
  color: rgb(107, 124, 137);
}

.cardtag-Hard {
  background-color: rgb(247, 181, 181);
  color: rgb(143, 85, 85);
}

.card-title {
  font-weight: bold;
  margin-top: 60px;
}

.tag {
  background: rgb(235, 235, 235);
  padding: 5px;
  border-radius: 3px;
  margin-right: 5px;
  font-weight: 300;
}

.text {
  font-weight: 300;
  font-size: 18px;
}
</style>