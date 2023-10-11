<template>
  <nav class="container">
    <ul class="list">
      <li class="list-home" @click="toggleAccordion(0)">
        <RouterLink :to="{ name: 'home' }"><p class="list-home-text">Home</p></RouterLink>
      </li>
      <li class="accordion-item" @click="toggleAccordion(1)">
        <RouterLink :to="{ name: 'cards1' }">Cards 1
        <div class="accordion-content" :class="{ 'open': isOpen === 1 }">
          Additional text for Cards 1.
        </div></RouterLink>
      </li>
      <li class="accordion-item" @click="toggleAccordion(2)">
        <a href="#">Cards 2</a>
        <div class="accordion-content" :class="{ 'open': isOpen === 2 }">
          Additional text for Cards 2.
        </div>
      </li>
      <li class="accordion-item" @click="toggleAccordion(3)">
        <a href="#">Create card</a>
        <div class="accordion-content" :class="{ 'open': isOpen === 3 }">
          Additional text for Create card.
        </div>
      </li>
      <li class="accordion-item" @click="toggleAccordion(4)">
        <RouterLink :to="{ name: 'about' }">About
        <div class="accordion-content" :class="{ 'open': isOpen === 4 }">
          Additional text for About.
        </div></RouterLink>
      </li>
      <li class="accordion-item" @click="toggleAccordion(5)">
        <a href="#">To do</a>
        <div class="accordion-content" :class="{ 'open': isOpen === 5 }">
          Additional text for To do.
        </div>
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
        // Clicked on "Home", close all accordions
        this.isOpen = null;
      } else if (this.isOpen === id) {
        // Clicked on an open accordion, close it
        this.isOpen = null;
      } else {
        // Clicked on a closed accordion, open it
        this.isOpen = id;
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  border-right: 3px solid black;
  width: 20vw;
  height: 100vh;
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

.list-home{
  margin-top:40px;
  padding-bottom: 40px;
  list-style-type: none;
  
}

.list-home-text{
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

.accordion-item{
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

.open {
  max-height: 500px;
}

.accordion-item:hover .accordion-content {
  display: block;
  max-height: 500px;
}
</style>
