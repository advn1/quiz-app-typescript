<template>
    <div
        class="option"
        :class="classLists(opt)"
        v-for="(opt, index) in props.questionData.options"
        :key="index"
        @click.prevent="handleClickOption(questionData, index, opt)"
    >
        {{ opt }}
    </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import {QuestionDataInt} from "../types/type"

const props = defineProps({
    questionData: {
        type: Object as PropType<QuestionDataInt>,
        required: true,
    },
    clicked: {
        type: String,
        required: true,
    },
});

const emits = defineEmits(["update-count", "update-clicked-option"])

const classLists = computed(() => {
    return (opt: string) => {
        return {
            green:
                props.questionData.answer === opt &&
                (props.clicked === props.questionData.answer ||
                    props.clicked.length > 0),
            red: props.questionData.answer !== opt && props.clicked === opt,
        };
    };
});

function handleClickOption(
    questionData: QuestionDataInt,
    index: number,
    opt: string
) {
    if (props.clicked.length > 0) {
        return;
    }
    if (props.questionData.answer === opt) {
        emits("update-count");
    }
    emits("update-clicked-option", questionData.options[index]);
}
</script>

<style scoped>
.option {
    cursor: pointer;
    padding: 15px;
    border: 2px solid black;
    gap: 15px;
    width: 100%;
}

.green {
    background-color: green;
}

.red {
    background-color: red;
}
</style>
