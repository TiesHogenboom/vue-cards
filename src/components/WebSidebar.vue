<template>
  <nav class="container">
    <ul class="list">
      <li class="list-home" @click="toggleAccordion(0)">
        <RouterLink :to="{ name: 'home' }">
          <p class="list-home-text">Home</p>
        </RouterLink>
      </li>
      <li class="accordion-item" >
        <h1 @click="toggleAccordion(1)">Cards</h1>
          <div class="accordion-content" :class="{ 'open': isOpen === 1 ||  isOpen === 2 ||  isOpen === 3}">

            <li class="accordion-item-child">
            <RouterLink :to="{ name: 'cards1' }" @click="toggleAccordion(2)">Cards 1
            <div class="accordion-content-child" :class="{ 'open': isOpen === 2 }">
              <p>Additional text for Cards 1.</p>
            </div></RouterLink>
          </li>
          <li class="accordion-item-child">
            <RouterLink :to="{ name: 'cards2' }" @click="toggleAccordion(3)">Cards 2
            <div class="accordion-content-child" :class="{ 'open': isOpen === 3 }">
              <p>Additional text for Cards 2.</p>
            </div></RouterLink>
          </li>

          </div>
      </li>
      <li class="accordion-item" @click="toggleAccordion(4)">
        <RouterLink :to="{ name: 'createcard' }" >Create card
          <div class="accordion-content" :class="{ 'open': isOpen === 4 }">
            Additional text for Create card.
          </div>
        </RouterLink>
      </li>
      <li class="accordion-item" @click="toggleAccordion(5)">
        <RouterLink :to="{ name: 'about' }">About
          <div class="accordion-content" :class="{ 'open': isOpen === 5 }">
            Additional text for About.
          </div>
        </RouterLink>
      </li>
      <li class="accordion-item" @click="toggleAccordion(6)">
        <RouterLink :to="{ name: 'todo' }">To do
          <div class="accordion-content" :class="{ 'open': isOpen === 6 }">
            Additional text for To do.
          </div>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'WebSidebar',
  data() {
    return {
      isOpen: null,
    };
  },
  components: {
    RouterLink,
  },
  methods: {
    toggleAccordion(id) {
      if (id === 0) {
      console.log("Clicked on Home, close all accordions")
        this.isOpen = null;
      } else if (this.isOpen === id) {
        console.log("Clicked on an open accordion, close it")
        this.isOpen = null;
      } else {
        console.log("Clicked on a closed accordion, open it")
        this.isOpen = id;
        console.log(id);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  border-right: 3px solid black;
  width: 20vw;
  background: white;
}

.list {
  padding-left: 30px;
}

a {
  text-decoration: none;
  color: black;
  font-size: 25px;
  font-weight: 700;
}

.list-home {
  margin-top: 40px;
  padding-bottom: 40px;
  list-style-type: none;

}

.list-home-text {
  width: 80px;
  height: 30px;
  transition: 0.2s;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.8);
  border: 3px solid black;
  display: flex;
  justify-content: center;
}

.list-home-text:hover {
  width: 82px;
  height: 32px;
}

.accordion-content-li {
  list-style-type: none;
  margin-bottom: 5px;
  ;
}

.accordion-item {
  list-style-type: none;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  margin-top: 10px;
  font-size: 16px;
  padding-left: 10px;
  background-color: white;
  border-left: 2px solid black;
  z-index: 1;
  transition: max-height 0.3s ease;
  font-weight: 400;
}

.accordion-content-child {
  max-height: 0;
  overflow: hidden;
  margin-top: 10px;
  font-size: 16px;
  background-color: white;
  z-index: 1;
  transition: max-height 0.3s ease;
  font-weight: 400;
}


.open {
  max-height: 500px;
}

.accordion-item:hover .accordion-content {
  display: block;
  max-height: 500px;
}

.accordion-item-child:hover .accordion-content-child {
  display: block;
  max-height: 500px;
}
</style>
