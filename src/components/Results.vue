<template>
    <div class="results">
        <div class="left">
            <h2 class="completed" :class="font.thin">Quiz completed</h2>
            <h1 class="score-title">You scored...</h1>
        </div>
        <div class="right">
            <div class="finals">
                <QuizHeader />
                <h1 class="correct-answers">{{ correctAnswers }}</h1>
                <h3 class="total-questions">out of 5</h3>
            </div>
            <button
                :class="button.primaryBtn"
                class="play-again"
                @click.prevent="redirectQuiz"
            >
                Play Again
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import font from "@/utilities/Font.module.css";
import button from "@/utilities/Button.module.css";
import { useQuizStore } from "@/store/store";
import QuizHeader from "./QuizHeader.vue";
import { useRoute, useRouter } from "vue-router";
import { PropType } from "vue";

const { correctAnswers } = useQuizStore();
const route = useRoute();
const router = useRouter();

const { setPlayAgain } = defineProps({
    setPlayAgain: {
        type: Function as PropType<() => void>,
        required: true,
    },
});

function redirectQuiz() {
    setPlayAgain();
    router.push(`/quiz/${route.params.name}`);
}
</script>

<style scoped>
.results {
    padding: 2.5rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.completed {
    justify-self: flex-start;
    font-size: clamp(30px, 10vw, 64px);
}

.score-title {
    font-weight: 600;
    font-size: clamp(30px, 10vw, 64px);
    text-align: left;
    margin-bottom: 5px;
    justify-self: flex-start;
}

.icon-name-container {
    width: fit-content;
}

.left {
    margin-bottom: 30px;
    width: 100%;
}

.right {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.finals {
    background-color: inherit;
    width: 100%;
    max-width: 820px;
    border-radius: 20px;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    box-shadow: var(--box-shadow);
    background-color: var(--option-bg-color);
}

.play-again {
    margin-top: 10px;
    padding: 18px 0;
    background-color: var(--purple-color);
    border: none;
    color: white;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    width: 100%;
    max-width: 820px;
    font-size: 1.3rem;
}

.correct-answers {
    margin: 10px 0;
    font-size: clamp(5rem, 25vw, 7rem);
    font-weight: 700;
}

.total-questions {
    color: gray;
    font-size: 1.3rem;
}

@media (min-width: 1000px) {
    .results {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .finals {
        width: 100%;
    }
}
</style>
