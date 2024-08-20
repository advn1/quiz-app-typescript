<template>
    <div class="options-list">
        <Option
            v-for="(option, idx) in props.options"
            :key="idx"
            class="option"
            :class="[optionClasses(option as string), {hovered: props.clicked === option}]"
            :letter="letters[idx]"
            :text="option"
            @click.prevent="handleClickOption(option as string)"
        />
    </div>
</template>

<script setup lang="ts">
import { useQuizStore } from "@/store/store";
import Option from "./Option.vue";
import { computed, PropType } from "vue";

const props = defineProps({
    answer: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    clicked: {
        type: String,
        required: true,
    },
    updateClickedOption: {
        type: Function as PropType<(opt: string) => void>,
        required: true,
    },
    isSubmit: {
        type: Boolean,
        required: true,
    },
});

const { updateCorrectAnswers } = useQuizStore();

const letters = ["A", "B", "C", "D"];

const optionClasses = computed(() => {
    return (opt: string) => {
        console.log(props.isSubmit);
        if (props.isSubmit) {
            return {
                green:
                    props.answer === opt &&
                    (props.clicked === props.answer ||
                        props.clicked.length > 0),
                red: props.answer !== opt && props.clicked === opt,
            };
        }
    };
});

function handleClickOption(opt: string) {
    if (props.isSubmit) {
        return;
    }
    if (props.answer === opt) {
        updateCorrectAnswers();
    }
    props.updateClickedOption(opt);
}
</script>

<style scoped>
.options-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
}

.option {
    cursor: pointer;
    width: 100%;
}

.hovered {
    background-color: rgb(123, 123, 123) !important;
}

.green {
    background-color: green !important;
}

.red {
    background-color: red !important;
}
</style>
