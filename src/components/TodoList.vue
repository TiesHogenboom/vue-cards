<template>
    <div class="container">

        <div class="card">
            <h1 class="title">To do</h1>
            <ul class="list">
                <li>Add text to Todo</li>
                <li>Add styling to Todo</li>
                <li>Add input in to do list</li>
            </ul>
        </div>

        <div class="card">
            <h1 class="title">Cards</h1>
            <ul class="list">
                <li>Create more unique cards</li>
                <li>Make create card page</li>
            </ul>
        </div>

        <div class="card">
            <h1 class="title">Account</h1>
            <ul class="list">
                <li>Create login form</li>
                <li>create register form</li>
                <li>create accept register page?</li>
                <li>Create account page</li>
            </ul>
        </div>

    </div>
</template>

<script>

</script>


<style scoped>
.container {
    background: lavender;
    display: flex;
    flex: 1;
    padding: 50px;
    flex-wrap: wrap;
}

.card {
    width: 300px;
    height: 400px;
    background: white;
    border: 3px solid black;
    border-radius: 10px;
    margin: 10px;
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
    border-top: 2px solid lightgray;
    padding-top: 4px;
    padding-bottom: 4px;
}
</style>