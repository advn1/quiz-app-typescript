<template>
    <div class="option" :class="button.primaryBtn">
        <div :class="icon.primaryIcon" class="icon-letter">
            <span>{{ letter }}</span>
        </div>
        <span class="question-text">{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
import icon from "@/utilities/Icon.module.css";

import button from "@/utilities/Button.module.css";
const { letter, text } = defineProps(["letter", "text"]);
</script>

<style scoped>
.option {
    background-color: var(--option-bg-color);
    box-shadow: var(--box-shadow);
}

.icon-letter {
    background-color: var(--letter-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.question-text {
    font-size: clamp(1rem, 5vw, 1.4rem);
}

.icon-letter span {
    color: rgba(60, 77, 103, 255);
}
</style>
