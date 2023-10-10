<template>
    <nav class="container">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'WebNavbar',
  }
  </script>
  
  <style>
.container {
  display: flex;
  justify-content: center;
  background: red;
  width: 200px;
  height: 400px;
}
</style>
  