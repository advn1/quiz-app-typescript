<template>
    <div
        v-if="
            store.data &&
            store.data.length &&
            !showResults &&
            route.path !== `not-found`
        "
        class="quiz-data-container"
    >
        <div class="left">
            <QuestionHeader
                :questionProgressNumber="questionNumber"
                :questionText="questionText"
            />
            <Bar :width="progressBarWidth" />
        </div>
        <div class="right">
            <OptionsList
                :answer="quizId!.questions[questionNumber - 1].answer"
                :options="options"
                :clicked="clicked"
                :updateClickedOption="updateClickedOption"
                :isSubmit="isSubmit"
            />
            <button
                @click.prevent="nextQuestion"
                class="submit-btn"
                :class="button.primaryBtn"
            >
                {{ buttonState }}
            </button>
        </div>
    </div>
    <Results v-else-if="showResults" :setPlayAgain="resetQuizState" />
    <div v-else>Loading Quiz...</div>
</template>
<script setup lang="ts">
import button from "@/utilities/Button.module.css";
import { useQuizStore } from "@/store/store";
import QuestionHeader from "./QuestionHeader.vue";
import Bar from "./Bar.vue";
import OptionsList from "./OptionsList.vue";
import Results from "./Results.vue";
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const store = useQuizStore();
const route = useRoute();
const router = useRouter();

const questionNumber = ref(1);
const showResults = ref(false);

const clicked = ref(""); // clicked option
const isSubmit = ref(false);
const buttonState = ref("Submit Answer");

const topics: string[] = [];
store.data.forEach((quiz) => topics.push(quiz.topic.toLowerCase()));

router.beforeEach((to, from, next) => {
    const topics: string[] = [];
    store.data.forEach((quiz) => topics.push(quiz.topic.toLowerCase()));
    const currentQuizName = to.params.name as string;

    if (
        !topics.includes(currentQuizName) &&
        to.path !== "/not-found" &&
        to.path !== "/home"
    ) {
        resetQuizState();
        next("/not-found");
    } else {
        resetQuizState();
        next();
    }
});

const quizId = computed(() =>
    store.data.find((quiz) => {
        return quiz.topic.toLowerCase() === route.params.name;
    })
);

const questionText = computed(() => {
    if (!quizId.value || questionNumber.value > 5) {
        return "";
    }
    return quizId.value!.questions[questionNumber.value - 1].question;
});

const options = computed(() => {
    if (!quizId.value || questionNumber.value > 5) {
        return [];
    }
    return quizId.value!.questions[questionNumber.value - 1].options;
});

const progressBarWidth = computed(() => (questionNumber.value / 5) * 100);

function nextQuestion() {
    if (clicked.value.length === 0) {
        return;
    }

    if (questionNumber.value === 5 && buttonState.value === "Next Question") {
        showResults.value = true;
        return;
    }

    if (buttonState.value === "Next Question") {
        questionNumber.value++;
        buttonState.value = "Submit Answer";
        clicked.value = "";
        isSubmit.value = false;
    } else {
        buttonState.value = "Next Question";
        isSubmit.value = true;
    }
}

function updateClickedOption(opt: string) {
    clicked.value = "";
    clicked.value = opt;
}

function resetQuizState() {
    questionNumber.value = 1;
    store.correctAnswers = 0;
    showResults.value = false;
    clicked.value = "";
    isSubmit.value = false;
    buttonState.value = "Submit Answer";
}
</script>

<style scoped>
.quiz-data-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.left,
.right {
    width: 100%;
    height: 100%;
}

.right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.submit-btn {
    width: 100%;
    border: none;
    margin-top: 10px;
    color: white;
    font-size: 1.05rem;
    font-weight: 600;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    background-color: var(--purple-color);
}

@media (min-width: 1025px) {
    .quiz-data-container {
        align-self: center;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
}
</style>
