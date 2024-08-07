<template>
    <div class="container">
        <h1>Simple Quiz</h1>
        <hr />
        <Question
            v-if="data.length > 0 && !showResults"
            :questionData="data[number]"
            @update-number="updateNumber"
            :updateCount="updateCount"
        ></Question>
        <h3 v-else-if="data.length === 0">Loading...</h3>
        <h3 v-else-if="!loading && data.length === 0">No Data Available</h3>
        <Results
            v-if="showResults"
            :count="correctAnswers"
            :length="data.length"
        ></Results>
    </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import Question from "./components/Question.vue";
import Results from "./components/Results.vue";
import { QuestionDataInt } from "./types/type";

const data: Ref<QuestionDataInt[]> = ref([]);
const number: Ref<number> = ref(0);
const showResults: Ref<Boolean> = ref(false);
const correctAnswers: Ref<number> = ref(0);
const loading: Ref<Boolean> = ref(true);

onMounted(async () => {
    try {
        data.value = await getData();
    } catch (err) {
        console.log("Error fetching data: ", err);
    } finally {
        loading.value = false;
    }
});

async function getData() {
    let response: Response = await fetch("/data.json");
    if (!response.ok) {
        loading.value = false;
        throw new Error("Failed to fetch data");
    }
    return response.json();
}

function updateNumber() {
    if (number.value + 1 === data.value.length) {
        showResults.value = true;
        return;
    }
    number.value++;
}

function updateCount() {
    correctAnswers.value++;
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    margin-bottom: 15px;
}

hr {
    margin-bottom: 15px;
}

.container {
    display: flex;
    flex-direction: column;
    width: 400px;
}
</style>
