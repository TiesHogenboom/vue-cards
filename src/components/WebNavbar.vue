<template>
    <nav class="container">
      <ul class="list">
        <li><a href="#">Cards 1</a></li>
        <li><a href="#">Cards 2</a></li>
        <li><a href="#">Create card</a></li>
        <li><a href="#">About</a></li>
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
  border-right: 3px solid black;
  width: 200px;
  height: 100vh;
  background: white;
  min-width: 200px;
}

.list {
  padding: 30px;
}

a {
  text-decoration: none;
  color: black;
  font-size: 25px;
  font-weight: 700;
}

li {
  list-style-type: none;
  margin-bottom: 20px;
}
</style>
  