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
                <li>Create register form</li>
                <li>Create accept register page?</li>
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
    min-height:100vh;
    padding-bottom: 70px;
}

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