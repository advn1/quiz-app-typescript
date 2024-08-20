<template>
    <div class="options-list">
        <Option
            v-for="(option, idx) in props.options"
            :key="`${idx}-${letterBgColor}`"
            class="option"
            :class="[optionClasses(option as string), {hovered: props.clicked === option}]"
            :letter="letters[idx]"
            :text="option"
            :letterBgColor="letterBgColor"
            @click.prevent="handleClickOption(option as string)"
            :redGreen="optionClasses"
        />
    </div>
</template>

<script setup lang="ts">
import { useQuizStore } from "@/store/store";
import Option from "./Option.vue";
import { computed, PropType, ref, watch } from "vue";

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
        type: Function as PropType<(opt: string) => string>,
        required: true,
    },
    isSubmit: {
        type: Boolean,
        required: true,
    },
    setIsNotSelected: {
        type: Function as PropType<() => void>,
        required: true,
    },
    letterBgColor: {
        type: String,
        required: true
    },
    setLetterBgColor: {
        type: Function as PropType<(v: string) => void>,
        required: true,
    },
});

const { updateCorrectAnswers } = useQuizStore();

const letters = ["A", "B", "C", "D"];

const optionClasses = computed(() => {
    return (opt: string) => {
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

watch(() => props.options, () => {
    props.setLetterBgColor("")
});

function handleClickOption(opt: string) {
    props.setIsNotSelected();
    if (props.answer === opt) {
        updateCorrectAnswers();
    }

    props.setLetterBgColor(opt);
    props.updateClickedOption(opt)
}

</script>

<style scoped>
.options-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.option {
    cursor: pointer;
    width: 100%;
}

.hovered {
    background-color: rgb(123, 123, 123);
}

.green {
    border: 2px solid green ;
}

.red {
    border: 2px solid red ;
}
</style>
