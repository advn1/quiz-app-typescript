<template>
    <div class="container-question">
        <h3>{{ `${questionData.id}. ${questionData.question}` }}</h3>
        <OptionsList
            :questionData="props.questionData"
            :clicked="clicked"
            @update-clicked-option="onUpdateClickedOption"
            @update-count="props.updateCount"
        ></OptionsList>
        <button class="btn" @click.prevent="handleNext()">Next</button>
    </div>
</template>

<script setup lang="ts">
import OptionsList from "./OptionsList.vue";
import { QuestionDataInt } from "@/types/type";
import { PropType, Ref, ref } from "vue";

const clicked: Ref<string> = ref("");
const emits = defineEmits(["update-number"]);
const props = defineProps({
    questionData: {
        type: Object as PropType<QuestionDataInt>,
        required: true,
    },
    updateCount: {
        type: Function as PropType<() => void>,
        required: true,
    },
});

function handleNext() {
    clicked.value = "";
    emits("update-number");
}

function onUpdateClickedOption(opt: string) {
    clicked.value = opt;
}
</script>

<style scoped>
.container-question {
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.btn {
    width: 200px;
    background-color: blueviolet;
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
