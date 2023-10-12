<template>
    <div class="container">

        <div class="form">
            <div class="form-title">Create Card</div>
            <div class="formsection">
                <div class="card-title">Card title:</div>
                <input type="text" class="input-card-title">
            </div>

            <div class="formsection">

                <label class="select-title" for="selectOption">Select a card list</label>
                    <select name=""  v-model="selectedOption" id="selectOption" class="select">
                        <optgroup label="Card lists">
                            <option value="option1">Card 1</option>
                            <option value="option2">Card 2</option>
                            <option value="option3">Todo card</option>
                        </optgroup>
                    </select>
            </div>

            <div class="formsection" v-if="selectedOption === 'option1'">
                <div class="card-item">Item:</div>
                <input type="text" class="input-item">
                <button class="add-item">Add item</button>
                <button class="remove-item">Remove item</button>
            </div>
            <div class="formsection">
                <button class="submit">Submit</button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedOption: 'option1' // Set the default selected option
        };
    }
};
</script>
  

<style scoped>
.container {
    display: flex;
    flex: 1;
    padding: 50px;
    flex-wrap: wrap;
    min-height: 100vh;
    padding-bottom: 70px;
    background: lightblue;
}

.form {
    display: flex;
    width: 650px;
    height: 800px;
    border: 3px solid black;
    border-radius: 10px;
    flex-direction: column;
    background: white;
    padding: 15px;
}

.form-title {
    display: flex;
    font-size: 40px;
    font-weight: 700;
}

.formsection {
    display: flex;
}

.card-title {
    padding: 10px;
    padding-right: 180px;
}

.input-card-title {
    flex-grow: 1;
}

.select-title {
    padding: 10px;
    padding-right: 180px;
}

.select {
    flex-grow: 1;
}

.card-item {
    padding: 10px;
    padding-right: 180px;
}

.input-item {
    flex-grow: 1;
}

.add-item {
    background: orange;
}

.remove-item {
    background: orange;
}

.submit {
    display: flex;
    padding: 10px;
    padding-right: 180px;
}
</style>