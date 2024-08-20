<template>
    <div class="quiz-list">
        <RouterLink @click.prevent="store.setQuiz(0)" to="quiz/html">
            <div class="quiz-preview" :class="button.primaryBtn">
                <div :class="[button.html, icon.primaryIcon]">
                    <img src="../../public/icon-html.svg" alt="" />
                </div>
                <span>HTML</span>
            </div>
        </RouterLink>

        <RouterLink @click.prevent="store.setQuiz(1)" to="quiz/css">
            <div class="quiz-preview" :class="button.primaryBtn">
                <div :class="[button.css, icon.primaryIcon]">
                    <img src="../../public/icon-css.svg" alt="" />
                </div>
                <span>CSS</span>
            </div>
        </RouterLink>

        <RouterLink @click.prevent="store.setQuiz(2)" to="quiz/javascript">
            <div class="quiz-preview" :class="button.primaryBtn">
                <div :class="[button.javascript, icon.primaryIcon]">
                    <img src="../../public/icon-javascript.svg" alt="" />
                </div>
                <span>Javascript</span>
            </div>
        </RouterLink>
        <span>
            <RouterLink
                @click.prevent="store.setQuiz(3)"
                to="quiz/accessibility"
            >
                <div class="quiz-preview" :class="button.primaryBtn">
                    <div :class="[button.accessibility, icon.primaryIcon]">
                        <img src="../../public/icon-accessibility.svg" alt="" />
                    </div>
                    <span>Accessibility</span>
                </div>
            </RouterLink>
        </span>
    </div>
</template>

<script setup lang="ts">
import icon from "@/utilities/Icon.module.css";
import button from "@/utilities/Button.module.css";
import { useQuizStore } from "@/store/store";
import { RouterLink } from "vue-router";

const store = useQuizStore();
</script>

<style scoped>
.quiz-list {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
}

.quiz-list span {
    font-size: clamp(16px, 5vw, 28px);
}

.quiz-preview {
    box-shadow: var(--light-box-shadow);
    background-color: var(--option-bg-color);
}

a {
    text-decoration: none;
    color: inherit;
}

@media (min-width: 1025px) {
    .quiz-list {
        max-width: 40vw;
    }
}
</style>
