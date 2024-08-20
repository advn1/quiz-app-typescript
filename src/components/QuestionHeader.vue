<template>
    <div class="question-header-container">
        <h4>
            Question
            {{ questionProgressNumber }} of 5
        </h4>
        <h1>
            {{ questionText }}
        </h1>
    </div>
</template>

<script setup lang="ts">
const { questionProgressNumber, questionText } = defineProps({
    questionProgressNumber: {
        type: Number,
        required: true,
    },
    questionText: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.question-header-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
}

h4 {
    color: rgb(171, 171, 171);
    font-size: clamp(0.8rem, 5vw, 1.4rem);
    font-style: italic;
    margin-bottom: 10px;
}

h1 {
    font-size: clamp(1.2rem, 5vw, 1.9rem);
    margin-bottom: 15px;
}
</style>
